import {Row, ProgressCircular} from '@/components/primitives';

const PageLoading = () => {
  return (
    <Row justify="center" align="center" className="min-h-screen">
      <ProgressCircular indeterminate size="75" />
    </Row>
  );
};

export default PageLoading;
