import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Premium 3D logo intro reveal.
 * - Plays once per session
 * - Visible for ~2.5s
 * - Then FLIP-animates into the navbar logo slot
 * - Then unmounts and lets page content fade in
 */
const INTRO_HOLD_MS = 2200;        // 3D animation visible time
const HANDOFF_MS = 750;             // FLIP transform to navbar position
const TOTAL_MS = INTRO_HOLD_MS + HANDOFF_MS;

export function LogoIntro() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const logoWrapRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"intro" | "handoff" | "done">("intro");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("sssd_intro_played") === "1") {
        document.documentElement.classList.add("intro-done");
        return;
      }
      sessionStorage.setItem("sssd_intro_played", "1");
    } catch { /* ignore */ }
    document.documentElement.classList.add("intro-active");
    setShow(true);
    return () => {
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  // Three.js scene
  useEffect(() => {
    if (!show || !mountRef.current) return;
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    const key = new THREE.DirectionalLight(0xffd9a8, 1.2);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xc89b4a, 0.9);
    rim.position.set(-4, -2, 3);
    scene.add(rim);

    const loader = new THREE.TextureLoader();
    let mesh: THREE.Mesh | null = null;
    let glow: THREE.Mesh | null = null;

    loader.load("/assets/brand/logo.png", (texture) => {
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.colorSpace = THREE.SRGBColorSpace;
      const img = texture.image as HTMLImageElement;
      const aspect = img.width / img.height;
      const planeH = 1.8;
      const planeW = planeH * aspect;

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        metalness: 0.55,
        roughness: 0.35,
        emissive: new THREE.Color(0xc89b4a),
        emissiveIntensity: 0.1,
        emissiveMap: texture,
      });
      mesh = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeH), mat);
      scene.add(mesh);

      const glowMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.3,
        color: 0xc89b4a,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      glow = new THREE.Mesh(new THREE.PlaneGeometry(planeW * 1.05, planeH * 1.05), glowMat);
      glow.position.z = -0.05;
      scene.add(glow);
    });

    const start = performance.now();
    let raf = 0;
    const animate = () => {
      const t = (performance.now() - start) / 1000;
      if (mesh) {
        const introT = Math.min(t / 1.1, 1);
        const eased = 1 - Math.pow(1 - introT, 3);
        mesh.scale.setScalar(0.55 + 0.45 * eased);
        mesh.rotation.y = (1 - eased) * Math.PI * 0.55 + Math.sin(t * 0.7) * 0.1;
        mesh.rotation.x = Math.sin(t * 0.5) * 0.05;
        mesh.position.y = Math.sin(t * 1.4) * 0.05;
        (mesh.material as THREE.MeshStandardMaterial).opacity = eased;
        if (glow) {
          glow.scale.copy(mesh.scale);
          glow.rotation.copy(mesh.rotation);
          glow.position.y = mesh.position.y;
          (glow.material as THREE.MeshBasicMaterial).opacity = 0.22 + Math.sin(t * 2) * 0.08;
        }
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose()); else if (mat) mat.dispose();
      });
    };
  }, [show]);

  // FLIP handoff: at INTRO_HOLD_MS, animate the logo wrapper from its
  // centered position to the navbar logo's bounding rect.
  useEffect(() => {
    if (!show) return;
    const handoffTimer = window.setTimeout(() => {
      const wrap = logoWrapRef.current;
      const overlay = overlayRef.current;
      const target = document.querySelector<HTMLImageElement>("#site-header img[alt='Shree Sai Samarth Developers']");
      if (!wrap || !target || !overlay) {
        setPhase("done");
        return;
      }
      const from = wrap.getBoundingClientRect();
      const to = target.getBoundingClientRect();

      const scale = to.height / from.height;
      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);

      wrap.style.transition = `transform ${HANDOFF_MS}ms cubic-bezier(0.6,0,0.2,1)`;
      wrap.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
      overlay.style.transition = `opacity ${HANDOFF_MS}ms ease`;
      overlay.style.opacity = "0";
      setPhase("handoff");
    }, INTRO_HOLD_MS);

    const doneTimer = window.setTimeout(() => {
      setPhase("done");
      setShow(false);
      document.documentElement.classList.remove("intro-active");
      document.documentElement.classList.add("intro-done");
    }, TOTAL_MS);

    return () => {
      window.clearTimeout(handoffTimer);
      window.clearTimeout(doneTimer);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#050505] via-[#111111] to-[#050505]
      style={{ pointerEvents: phase === "handoff" ? "none" : "auto" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,215,120,0.12), transparent 60%)",
        }}
      />
      <div
        ref={logoWrapRef}
        className="relative h-[70vh] w-[85vw] max-w-[750px]"
        style={{ transformOrigin: "center center" }}
      >
        <div ref={mountRef} className="absolute inset-0" />
      </div>
    </div>
  );
}
