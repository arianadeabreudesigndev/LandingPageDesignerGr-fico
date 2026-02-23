import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import Container from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export default function Section({ className, children, container = true, ...props }: SectionProps) {
  const content = container ? <Container>{children}</Container> : children;
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      {content}
    </section>
  );
}