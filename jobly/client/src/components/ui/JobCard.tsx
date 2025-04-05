import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { Job } from "../../lib/types";
import { format } from "date-fns";
import { Button } from "./Button";
import { Badge } from "./badge";

const JobCard = ({ job }: { job: Job }) => {
  const { id, title, createdAt, company, tags, salary, location } = job;
  return (
    <div className="rounded-xl border p-2">
      <section className="bg-primary text-primary-foreground space-y-4 rounded-md p-4">
        <div className="flex items-center justify-between gap-2">
          <Badge className="bg-primary-foreground text-primary font-semibold">
            {format(createdAt, "d MMM, yyyy")}
          </Badge>

          <Button variant="ghost-dark" size="icon">
            <Bookmark className="size-5" />
          </Button>
        </div>

        <span className="text-sm font-medium">{company}</span>

        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="line-clamp-1 text-lg font-bold">{title}</h1>
          </div>
          {/* <img src={company.logoUrl} className="h-12" /> */}
        </div>

        {tags?.length > 0 && (
          <div className="flex min-h-[64px] flex-wrap items-end gap-1">
            {tags.map((tag, index) => (
              <Badge
                key={id + "-tag-" + index}
                className="border-border border"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </section>

      <section className="flex items-center justify-between gap-2 px-4 py-4">
        <div className="flex flex-col">
          <span className="font-bold">Rs. {salary}</span>
          <span className="text-muted-foreground text-sm">{location}</span>
        </div>

        <Link to={`/job/${id}`}>
          <Button>Details</Button>
        </Link>
      </section>
    </div>
  );
};

export default JobCard;
