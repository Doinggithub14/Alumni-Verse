import alumniData from "@/data/alumni_info.json";
import Page from "./page";

export default async function NetworkingHubPage() {
  const events = await alumniData(); // Fetch data here

  return <Page events={events} />;
}
