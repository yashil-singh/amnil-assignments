import { db } from "../index.js";

export const getUserSavedJobs = async (req, res) => {
  try {
    const userId = req.user?.id;

    const saves = db.get("saves");
    const jobs = db.get("jobs");

    const userSaves = saves.filter({ userId }).value();
    const jobIds = userSaves.map((save) => save.jobId);

    const savedJobs = jobs.filter((job) => jobIds.includes(job.id)).value();

    res.status(200).json(savedJobs);
  } catch (error) {
    console.log("🚀 ~ jobController.js:13 ~ error:", error);

    res.status(500).json({ message: "Something went wrong! Try again." });
  }
};

export const toggleJobSave = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!id) return res.status(400).json({ message: "Job ID is required." });

    const jobs = db.get("jobs");

    const existingJob = jobs.find({ id }).value();

    if (!existingJob)
      return res.status(404).json({ message: "Job not found." });

    let message;

    const saves = db.get("saves");

    const savedJob = saves.find({ jobId: id, userId }).value();

    if (savedJob) {
      saves.remove({ jobId: id, userId }).write();
      message = "Job removed from bookmarks.";
    } else {
      const job = { jobId: id, userId };
      saves.push(job).write();
      message = "Job bookmarked.";
    }

    res.status(200).json({
      message,
      job: existingJob,
    });
  } catch (error) {
    console.log("🚀 ~ jobController.js:5 ~ error:", error);

    res.status(500).json({ message: "Something went wrong! Try again." });
  }
};
