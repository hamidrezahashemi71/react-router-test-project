import type { Route } from "./+types";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params.postId
  return { postId }
}

export async function action() {

}


export default function SinglePostPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>post id: {loaderData.postId}</p>
    </div>
  )
}
