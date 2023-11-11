import {AdminLayout} from "@/layouts/AdminLayout";
import {Post} from "@/models/Post";
import KiaEv6DriftImage from "@/public/img/2023-ev6-gt-action-1660755931.jpg";
import TeslaAutopilotImage from "@/public/img/tesla-model-s-autopilot-software-70.jpeg";
import RivianR1TImage from "@/public/img/RivianR1T.jpeg";
import FreewireImage from "@/public/img/FreewireChargingStation.jpeg";
import {DataGrid, GridColDef, GridValueFormatterParams} from '@mui/x-data-grid';
import {useTheme} from "@mui/material";
import dayjs from "dayjs";
import {IS_DEV_ENV} from "@/config";

const posts: Post[] = [
  {
    id: 1,
    title: "Using the private Kia API",
    subtitle: "Kia, when will you make our life easier?",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 1, 3),
    readTime: 2,
    imageUrl: KiaEv6DriftImage.src
  },
  {
    id: 2,
    title: "Tesla works on v4 Hardware",
    subtitle: "Autopilot gettin' spicy",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 1, 9),
    readTime: 4,
    imageUrl: TeslaAutopilotImage.src
  },
  {
    id: 3,
    title: "Rivian suffers from production difficulties",
    subtitle: "God save the Rivian",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 1, 7),
    readTime: 2,
    imageUrl: RivianR1TImage.src,
    objectPosition: "0% 50%"
  },
  {
    id: 4,
    title: "Freewire shows us how to not care about the grid",
    subtitle: "Juice 'em up",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 0, 29),
    readTime: 6,
    imageUrl: FreewireImage.src,
    objectPosition: "0% 50%"
  }
]

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'published', headerName: 'Published on', width: 200,
    valueFormatter: (params: GridValueFormatterParams<Date>) => {
      if (params.value == null) {
        return '';
      }
      return dayjs(params.value).format('DD.MM.YYYY HH:mm');
    },
  },
];

export default function AdminBlogPage() {
  return (
    <AdminLayout>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid rows={posts} columns={columns} />
      </div>
    </AdminLayout>
  )
}

export async function getStaticProps() {
  return {
    notFound: !IS_DEV_ENV,
    props: {}
  }
}