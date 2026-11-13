import fs from "fs";
import path from "path";
import { projectData, featuredProjects, filters } from "./projectData";

test("portfolio project slugs and repositories are unique", () => {
  expect(new Set(projectData.map((project) => project.id)).size).toBe(projectData.length);
  expect(new Set(projectData.map((project) => project.repo)).size).toBe(projectData.length);
});

test("projects have accurate, safe external link shapes", () => {
  projectData.forEach((project) => {
    expect(project.title).toBeTruthy();
    expect(project.description.length).toBeGreaterThan(30);
    expect(project.tags.length).toBeGreaterThan(0);
    expect(project.repo).toMatch(/^https:\/\/github\.com\/wiilki\//);
    expect(filters).toContain(project.category);
    if (project.live) {
      expect(new URL(project.live).protocol).toBe("https:");
      expect(new URL(project.live).hostname).toBeTruthy();
    }
  });
});

test("featured items exist in the main project catalog", () => {
  expect(featuredProjects).toHaveLength(3);
  featuredProjects.forEach((project) => {
    expect(projectData).toContain(project);
    expect(project.live).toBeTruthy();
  });
});

test("published projects have real stored screenshots and matching capture sources", () => {
  const sources = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../scripts/preview-sources.json"), "utf8")
  );
  const published = projectData.filter((project) => Boolean(project.live));
  expect(sources.map((source) => source.id).sort()).toEqual(
    published.map((project) => project.id).sort()
  );

  published.forEach((project) => {
    const source = sources.find((item) => item.id === project.id);
    expect(source.url).toBe(project.live);
    const screenshotPath = path.resolve(__dirname, "../../public/previews", project.id + ".png");
    expect(fs.statSync(screenshotPath).size).toBeGreaterThan(10000);
  });
});
