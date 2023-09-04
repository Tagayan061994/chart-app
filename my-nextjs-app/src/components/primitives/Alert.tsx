import clsx from "clsx";
import { Row, Stack, Button, Icon } from "@/components/primitives";

import { mdiCheckCircle, mdiAlert, mdiCloseCircle } from "@mdi/js";

type AlertVariant = "success" | "error";

interface AlertProps extends React.PropsWithChildren {
  className?: string;
  variant?: AlertVariant;
  title?: string;
  text?: string;
  maxWidth?: string | number;
  onCloseClick?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  className,
  variant = "error",
  title,
  text,
  maxWidth,
  onCloseClick,
}) => {
  return (
    <div
      className={clsx(
        className,
        "border  rounded-lg p-4",
        variant === "error"
          ? "border-error text-error"
          : "border-primary text-primary"
      )}
      style={{ maxWidth: maxWidth && `${maxWidth}px` }}
    >
      <Row align="center" justify="between">
        <Row align="start" nowrap className="gap-x-4">
          <Icon
            name={variant === "error" ? mdiAlert : mdiCheckCircle}
            color={variant === "error" ? "error" : "primary"}
          />
          <Stack spacing="xs">
            {title && (
              <div className="text-lg font-semibold leading-6">{title}</div>
            )}

            {text && <div>{text}</div>}
          </Stack>
        </Row>

        {onCloseClick && (
          <Button color="light-blue" icon onClick={onCloseClick}>
            <Icon name={mdiCloseCircle} color="error" />
          </Button>
        )}
      </Row>

      {children}
    </div>
  );
};
