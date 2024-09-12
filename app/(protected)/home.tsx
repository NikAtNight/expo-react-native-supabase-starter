import { useRouter } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";
import axios from "axios";

export default function TabOneScreen() {
	const router = useRouter();

	return (
		<View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">
			<H1 className="text-center">Home</H1>
			<Muted className="text-center">
				You are now authenticated and this session will persist even after closing the app.
			</Muted>
			<Button
				className="w-full"
				variant="default"
				size="default"
				onPress={() => {
					router.push("/modal");
				}}
			>
				<Text>Open Modal</Text>
			</Button>
			<Button
				onPress={() => {
					console.log(axios.defaults.headers.common.Authorization);
					console.log(axios.defaults.baseURL);

					axios
						.get("/users/me/")
						.then(({ data }) => console.log("RESPONSE", data))
						.catch((err) => console.log(err));
				}}
			>
				<Text>Test Request</Text>
			</Button>
		</View>
	);
}
