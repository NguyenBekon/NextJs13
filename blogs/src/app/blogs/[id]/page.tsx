"use client";

import Link from "next/link";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Title: {data?.title}</Card.Title>
        <Card.Text>Content: {data?.content}</Card.Text>
        <Card.Text>Author: {data?.author}</Card.Text>
        <Link href={"/blogs"} className="btn btn-primary">
          Go Back
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ViewDetailBlog;
