import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faArrowDown,
  faArrowUp,
  faDollarSign,
  faPercentage,
} from "@fortawesome/free-solid-svg-icons";

export interface ChipProps {
  label?: string;
  labelIcon?: IconDefinition;
  labelColor?: string;
  description?: string;
  align?: "left" | "center" | "right";
  number?: number;
  totalNumber?: number;
  type?: "neutral" | "success" | "danger" | "warning" | "info" | "accent";
  variant?: "default" | "money" | "fraction" | "percent";
  percentChange?: number;
  className?: string;
}

const typeStyles = {
  neutral: "text-neutral-50",
  success: "text-success-green-50",
  warning: "text-warning-yellow-50",
  danger: "text-error-red-50",
  info: "text-info-blue-50",
  accent: "text-primary-purple-50",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function DataChip({
  label,
  labelIcon,
  labelColor,
  description,
  align = "center",
  number,
  totalNumber,
  type = "neutral",
  variant = "default",
  percentChange,
  className = "",
}: ChipProps) {
  const arrowIcon =
    percentChange && percentChange > 0 ? faArrowUp : faArrowDown;

  return (
    <div
      className={`flex flex-col [&]:gap-2 rounded-lg [&]:border border-neutral-10 shadow-full-sm w-min [&]:py-4 [&]:px-5 items-center justify-center ${className}`}
    >
      <div className={`${alignStyles[align]} w-full text-neutral-50`}>
        <div
          className={`font-semibold text-base ${
            labelColor ? `${labelColor}` : ""
          }`}
        >
          {labelIcon && (
            <FontAwesomeIcon icon={labelIcon} className="[&]:mr-1" />
          )}
          {label}
        </div>
        <div className="[&]:text-sm">{description}</div>
      </div>
      <div
        className={`flex ${
          variant === "fraction" ? "items-end [&]:gap-2" : "items-center"
        } justify-center max-w-fit px-3.5`}
      >
        {variant === "money" && (
          <FontAwesomeIcon
            icon={faDollarSign}
            className={`${typeStyles[type]} fa-xl [&]:mr-2`}
          />
        )}
        <div className={`text-6xl mb-0 ${typeStyles[type]} font-medium`}>
          {number ?? "-"}
        </div>
        {variant === "fraction" && (
          <div className="[&]:mb-1 font-semibold text-base text-neutral-40">
            /{totalNumber ?? "00"}
          </div>
        )}
        {variant === "percent" && (
          <FontAwesomeIcon
            icon={faPercentage}
            className={`${typeStyles[type]} fa-xl [&]:ml-2`}
          ></FontAwesomeIcon>
        )}
      </div>
      {percentChange && (
        <div
          className={`flex [&]:gap-1 justify-center items-center ${
            percentChange < 0 && "text-error-red-50"
          } ${percentChange > 0 && "text-success-green-50"}`}
        >
          <FontAwesomeIcon className="font-bold" icon={arrowIcon} />
          <div className="font-semibold">{Math.abs(percentChange)}%</div>
        </div>
      )}
    </div>
  );
}
