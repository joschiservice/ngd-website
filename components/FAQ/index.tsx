import { Container, Title, Accordion, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
    entries: { question: string; answer: any; }[]
}

export function FAQ({ entries }: Props) {
    const isSmallDevice = useMediaQuery('(max-width: 1020px)');
    
    return (
        <Container size="xl">
            <Title order={1} align={"center"} mb="lg" color="white">FAQ</Title>
            <Accordion>
                {entries.map((item, index) =>
                    <Accordion.Item key={index} value={index.toString()}>
                        <Accordion.Control>
                            <Box display="flex" mr={8}>
                                <Title color="white" order={isSmallDevice ? 5 : 4} align="right">{item.question}</Title>
                            </Box>
                        </Accordion.Control>
                        <Accordion.Panel>
                            {item.answer}
                        </Accordion.Panel>
                    </Accordion.Item>)
                }
            </Accordion>
        </Container>
    )
}