import { getInitials } from '@/utils/helpers';
import * as RdxAvatar from '@radix-ui/react-avatar';

type AvatarProps = {
  username: string;
  src: string;
};

export function Avatar({ src, username }: AvatarProps) {
  return (
    <RdxAvatar.Root className="inline-flex h-[50px] w-[50px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <RdxAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        // src={src}
        alt="Colm Tuite"
      />
      <RdxAvatar.Fallback
        className="text-primary-dark flex h-full w-full items-center justify-center bg-secondary-dark text-[15px] font-medium"
        delayMs={600}
      >
        {getInitials(username)}
      </RdxAvatar.Fallback>
    </RdxAvatar.Root>
  );
}
