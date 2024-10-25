import { useRouter } from "expo-router";
import { View } from "react-native";

import { useGetUser } from "@/actions/userHooks";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";

export default function TabOneScreen() {
	const router = useRouter();
	const { data, isLoading } = useGetUser();

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
			<Text>{isLoading ? "Loading..." : data?.email}</Text>
		</View>
	);
}
