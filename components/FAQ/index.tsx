import { Container, Title, Accordion, Box } from "@mantine/core";

interface Props {
    entries: { question: string; answer: string, }[]
}

export function FAQ({ entries }: Props) {
    return (
        <Container size="xl">
            <Title order={1} align={"center"} mb="lg" color="white">FAQ</Title>
            <Accordion defaultValue="customization">
                {entries.map((item) =>
                    <Accordion.Item value="customization">
                        <Accordion.Control>
                            <Box display="flex" mr={8}>
                                <Title color="white" order={4}>{item.question}</Title>
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