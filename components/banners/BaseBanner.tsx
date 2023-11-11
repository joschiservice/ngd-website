import { Container } from "@mantine/core";

interface Props {
    children: any;
    background: string;
}

export function BaseBanner({children, background}: Props) {
    return (
      <div style={{background}}>
        <Container size="xl" py={60}>
          {children}
        </Container>
      </div>
    )
  }