import Box from "@/src/components/Box";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Learn React Three Fiber</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="">
				<Canvas style={{ height: "100vh" }}>
					<ambientLight intensity={Math.PI / 2} />
					<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
					<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
					<Box position={[-1.2, 0, 0]} />
					<Box position={[1.2, 0, 0]} />
				</Canvas>
			</div>
		</>
	);
}
