import {AppShell, Flex, Group, Header as MantineHeader, Navbar as MantineNavbar, Aside as MantineAside, Text, ThemeIcon, UnstyledButton, MediaQuery} from "@mantine/core";
import Link from "next/link";
import {GrArticle} from "react-icons/gr"

export function AdminLayout() {
  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      aside={<Aside />}
      header={<Header />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  )
}

function Header() {
  return (
    <MantineHeader height={60} p="xs">
      <Flex align="center" mih="100%">
        <Text fz="xl" fw={1000}>NextGen Drive CMS</Text>
      </Flex>
    </MantineHeader>
  )
}

function NavbarItem({color, label, icon, href}: {color: string, label: string, icon: any, href: string}) {
  return (
    <Link href={href} passHref>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color}>
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  )
}

function Aside() {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <MantineAside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <NavbarItem color="blue" label="Blog" icon={<GrArticle />} href="/admin/blog" />
      </MantineAside>
    </MediaQuery>
  )
}