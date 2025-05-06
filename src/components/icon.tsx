import type { SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: LucideIcon | React.FC<SVGProps<SVGSVGElement>>;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 24, className, ...props }) => {
  return <IconComponent width={size} height={size} className={cn("text-foreground group-hover:text-accent-foreground transition-colors", className)} {...props} />;
};

export default Icon;