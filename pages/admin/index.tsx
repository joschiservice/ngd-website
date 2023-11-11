import {AdminLayout} from "@/layouts/AdminLayout";
import {IS_DEV_ENV} from "@/config";

export default function AdminPage() {
  return (
    <AdminLayout />
  )
}

export async function getStaticProps() {
  return {
    notFound: !IS_DEV_ENV,
    props: {}
  }
}