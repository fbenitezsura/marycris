import { NumericFormat } from 'react-number-format';
import clsx from "clsx";

export type ShowNumberFormatProps = {
  value?: any,
  className?: string;
  decimal?: number,
  symbol?: string,
  trunc?: boolean
};

const ShowNumberFormat = ({
  value,
  className,
  decimal,
  symbol,
  trunc = true
}: ShowNumberFormatProps) => {

  return (
    <NumericFormat
      className={clsx(
        '',
        className
      )}
      thousandSeparator={'.'}
      decimalScale={0}
      fixedDecimalScale={true}
      decimalSeparator={','}
      value={Math.trunc(value)}
      displayType={'text'}
      prefix={symbol ? symbol : '$'}
    />
  );
};

export default ShowNumberFormat;
