import { Flex, Text, Card, Grid } from "@radix-ui/themes";
import {
  AvatarIcon,
  LightningBoltIcon,
  RocketIcon,
  TargetIcon,
} from "@radix-ui/react-icons";

function DashCards() {
  return (
    <Grid
      columns={{
        initial: "2",
        xs: "2",
        md: "4",
      }}
      gap="5"
      width="auto"
      mb="5"
    >
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Total Revenue</Text>
          <TargetIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            $45,231.89
          </Text>
          <Text size="1">+20.1% from last month</Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Subscriptions</Text>
          <AvatarIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            +2350
          </Text>
          <Text size="1">+180.1% from last month</Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Sales</Text>
          <RocketIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            +12,234
          </Text>
          <Text size="1">+19% from last month</Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Active Now</Text>
          <LightningBoltIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            +573
          </Text>
          <Text size="1">+201 since last hour</Text>
        </Flex>
      </Card>
    </Grid>
  );
}

export default DashCards;
