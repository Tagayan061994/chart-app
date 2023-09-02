import {Stack, Row, Button} from '@/components/primitives';

const SubscriptionBox = () => {
  return (
    <Stack className="text-center">
      <h4 className="text-white text-2xl font-bold capitalize">
        Subscribe to our latest news
      </h4>

      <Row
        justify="between"
        align="center"
        className="bg-white rounded-xl h-14"
      >
        <input
          placeholder="Work Email *"
          className="h-full rounded-l-xl outline-0 px-7 placeholder:text-xs placeholder:text-light-blue placeholder:opacity-40"
        />

        <Button color="primary" xLarge dark>
          subscribe
        </Button>
      </Row>
    </Stack>
  );
};

export default SubscriptionBox;
