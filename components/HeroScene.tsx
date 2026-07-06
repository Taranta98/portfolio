"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Billboard, Float, Stars, useTexture } from "@react-three/drei";
import {
  IcosahedronGeometry,
  SRGBColorSpace,
  Vector3,
  type Camera,
  type Group,
  type Texture,
} from "three";

const RADIUS = 2.35;

const vertexLogos = [
  { src: "/javascript.svg", vertexIndex: 0 },
  { src: "/Laravel-Logo.wine.png", vertexIndex: 3 },
  { src: "/tailwindcssimage.webp", vertexIndex: 6 },
  { src: "/databaseimg.png", vertexIndex: 9 },
  { src: "/cssimg.webp", vertexIndex: 1 },
  { src: "/nextjsimg.webp", vertexIndex: 4 },
  { src: "/nodejsimg.webp", vertexIndex: 7 },
] as const;

function useIcosahedronVertices(radius: number) {
  return useMemo(() => {
    const geometry = new IcosahedronGeometry(radius, 0);
    const positions = geometry.attributes.position;
    const vertices: Vector3[] = [];
    const seen = new Set<string>();

    for (let i = 0; i < positions.count; i++) {
      const vertex = new Vector3(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i),
      );
      const key = `${vertex.x.toFixed(2)},${vertex.y.toFixed(2)},${vertex.z.toFixed(2)}`;

      if (!seen.has(key)) {
        seen.add(key);
        vertices.push(vertex);
      }
    }

    geometry.dispose();
    return vertices;
  }, [radius]);
}

function useResponsiveSettings() {
  const { size } = useThree();

  return useMemo(() => {
    const w = size.width;

    if (w < 640) {
      return {
        modelPosition: [0.0, 0.0, 0] as const,
        modelScale: 0.78,
        logoSize: 0.52,
        starsCount: 1800,
        starsFactor: 2.2,
        cameraZ: 8.6,
        fov: 56,
      };
    }

    if (w < 1024) {
      return {
        modelPosition: [1.25, 0.1, 0] as const,
        modelScale: 0.9,
        logoSize: 0.62,
        starsCount: 3000,
        starsFactor: 2.4,
        cameraZ: 7.8,
        fov: 54,
      };
    }

    return {
      modelPosition: [3.4, 0.15, 0] as const,
      modelScale: 1.0,
      logoSize: 0.72,
      starsCount: 4500,
      starsFactor: 2.6,
      cameraZ: 7.2,
      fov: 52,
    };
  }, [size.width]);
}

function ResponsiveCamera() {
  const settings = useResponsiveSettings();
  const { camera } = useThree();

  useEffect(() => {
    const c = camera as Camera & {
      fov?: number;
      updateProjectionMatrix: () => void;
    };

    if (typeof c.fov === "number") {
      c.fov = settings.fov;
      c.updateProjectionMatrix();
    }

    c.position.set(0, 0, settings.cameraZ);
  }, [camera, settings.cameraZ, settings.fov]);

  return null;
}

function VertexLogo({
  position,
  texture,
  size,
}: {
  position: Vector3;
  texture: Texture;
  size: number;
}) {
  return (
    <Billboard position={[position.x, position.y, position.z]}>
      <mesh>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </Billboard>
  );
}

function FloatingOrb() {
  const groupRef = useRef<Group>(null);
  const vertices = useIcosahedronVertices(RADIUS);
  const settings = useResponsiveSettings();
  const textures = useTexture(
    vertexLogos.map((logo) => logo.src),
    (loaded) => {
      loaded.forEach((texture) => {
        texture.colorSpace = SRGBColorSpace;
      });
    },
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.08;
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
      <group
        ref={groupRef}
        position={settings.modelPosition}
        scale={settings.modelScale}
      >
        <mesh>
          <icosahedronGeometry args={[RADIUS, 0]} />
          <meshStandardMaterial
            color="#a78bfa"
            wireframe
            transparent
            opacity={0.6}
            emissive="#c4b5fd"
            emissiveIntensity={1.25}
          />
        </mesh>

        {vertexLogos.map((logo, index) => (
          <VertexLogo
            key={logo.src}
            position={vertices[logo.vertexIndex]}
            texture={textures[index]}
            size={settings.logoSize}
          />
        ))}
      </group>
    </Float>
  );
}

function Scene() {
  const settings = useResponsiveSettings();

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[10, 10, 10]} intensity={2.4} color="#c4b5fd" />
      <pointLight position={[-10, -5, -5]} intensity={1.4} color="#7c3aed" />
      <pointLight position={[0, 0, 7]} intensity={1.2} color="#a78bfa" />
      <Stars
        radius={90}
        depth={55}
        count={settings.starsCount}
        factor={settings.starsFactor}
        saturation={0}
        fade
        speed={0.8}
      />
      <ResponsiveCamera />
      <FloatingOrb />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.2], fov: 52 }}
      className="h-full w-full"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
