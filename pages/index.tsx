import Box from "@/src/components/Box";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
	const [rotate, setRotate] = useState(true);

	return (
		<>
			<Head>
				<title>Learn React Three Fiber</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div style={{ margin: "1rem" }}>
                <button onClick={() => setRotate((r) => !r)}>
                    {rotate ? "Stop Rotation" : "Start Rotation"}
                </button>
            </div>
			<div className="">
				<Canvas style={{ height: "90vh" }}>
					<ambientLight intensity={Math.PI / 2} />
					<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
					<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
					<Box position={[-1.2, 0, 0]} rotate={rotate} />
					<Box position={[1.2, 0, 0]} rotate={rotate} />
					<OrbitControls />
				</Canvas>
			</div>
		</>
	);
}
