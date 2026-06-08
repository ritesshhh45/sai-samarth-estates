import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Premium 3D logo intro reveal using Three.js.
 * Plays once per session. Renders the logo as a textured plane with
 * subtle rotation, float, and metallic glow, then fades out.
 */
export function LogoIntro() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("sssd_intro_played") === "1") return;
      sessionStorage.setItem("sssd_intro_played", "1");
    } catch {
      /* ignore */
    }
    setShow(true);
  }, []);

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

    // Lights for metallic feel
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.DirectionalLight(0xffd9a8, 1.2);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xff5fa8, 0.8);
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
      const planeH = 2.4;
      const planeW = planeH * aspect;

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        metalness: 0.6,
        roughness: 0.35,
        emissive: new THREE.Color(0xff8a2a),
        emissiveIntensity: 0.08,
        emissiveMap: texture,
      });
      mesh = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeH), mat);
      scene.add(mesh);

      // Soft glow halo
      const glowMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.35,
        color: 0xffb070,
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
        // Intro reveal: scale and rotate from 0 → 1 over ~1.2s, then float
        const introT = Math.min(t / 1.2, 1);
        const eased = 1 - Math.pow(1 - introT, 3);
        mesh.scale.setScalar(0.6 + 0.4 * eased);
        mesh.rotation.y = (1 - eased) * Math.PI * 0.6 + Math.sin(t * 0.8) * 0.12;
        mesh.rotation.x = Math.sin(t * 0.6) * 0.06;
        mesh.position.y = Math.sin(t * 1.5) * 0.06;
        (mesh.material as THREE.MeshStandardMaterial).opacity = eased;
        if (glow) {
          glow.scale.copy(mesh.scale);
          glow.rotation.copy(mesh.rotation);
          glow.position.y = mesh.position.y;
          (glow.material as THREE.MeshBasicMaterial).opacity =
            0.25 + Math.sin(t * 2) * 0.1;
        }
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const fadeTimer = window.setTimeout(() => setFadingOut(true), 2400);
    const removeTimer = window.setTimeout(() => setShow(false), 3200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else if (mat) mat.dispose();
      });
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0d0a08] via-[#1a1310] to-[#0d0a08] transition-opacity duration-700 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* radial glow backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,140,60,0.18), transparent 60%)",
        }}
      />
      <div ref={mountRef} className="relative h-[60vh] w-[90vw] max-w-[820px]" />
    </div>
  );
}
