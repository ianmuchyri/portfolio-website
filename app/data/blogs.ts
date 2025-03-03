export interface Blog {
  cover_image: string;
  published_at: Date; // Assuming timestamp or date string
  public_reactions_count: number;
  comments_count: number;
  url: string;
  title: string;
  reading_time_minutes: number;
  description: string;
}

export const placeholderBlogs: Blog[] = [
  {
    cover_image: "https://placehold.co/1920x1080/png",
    published_at: new Date("2024-02-25T14:00:00Z"),
    public_reactions_count: 120,
    comments_count: 15,
    url: "#",
    title: "Lorem Ipsum Dolor Sit Amet",
    reading_time_minutes: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    cover_image: "https://placehold.co/1920x1080/png",
    published_at: new Date("2024-02-20T10:30:00Z"),
    public_reactions_count: 85,
    comments_count: 10,
    url: "#",
    title: "Consectetur Adipiscing Elit",
    reading_time_minutes: 6,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    cover_image: "https://placehold.co/1920x1080/png",
    published_at: new Date("2024-02-18T16:45:00Z"),
    public_reactions_count: 200,
    comments_count: 30,
    url: "#",
    title: "Sed Do Eiusmod Tempor",
    reading_time_minutes: 10,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
