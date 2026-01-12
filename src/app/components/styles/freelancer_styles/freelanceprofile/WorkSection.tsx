import React from "react";

interface GigData {
  id: number;
  freelancerName: string;
  shortBio: string;
  description: string;
  price: number;
  skillName: string;
  rating: number;
  reviewCount: number;
  experience: string;
  location: string;
  lastActiveDays: number;
  workCount: number;
  verified: boolean;
  imageType?: string;
  imageData?: string;
  imageUrl?: string;
}

interface WorkSectionProps {
  gigData?: GigData | null;
}

const defaultFeatured = [
  {
    title: "E-commerce Platform Redesign",
    img: "/images/container.png",
    tags: ["React", "UI/UX", "Figma"],
  },
  {
    title: "Mobile Banking App",
    img: "/images/container1.png",
    tags: ["React Native", "TypeScript"],
  },
];

const defaultAllWork = [
  { title: "E-commerce", img: "/images/container.png", tag: "React" },
  { title: "Mobile Banking App", img: "/images/container1.png", tag: "React" },
  { title: "SaaS Dashboard Analytics", img: "/images/work2.png", tag: "React" },
  { title: "Healthcare Portal", img: "/images/work3.png", tag: "React" },
  { title: "Real Estate Marketplace", img: "/images/work4.png", tag: "React" },
  { title: "Educational Platform", img: "/images/work5.png", tag: "React" },
];

export default function WorkSection({ gigData }: WorkSectionProps) {
  // If gigData exists and has an image, use it as featured work
  const featured = gigData?.imageUrl
    ? [
        {
          title: gigData.shortBio || "Featured Gig",
          img: gigData.imageUrl,
          tags: gigData.skillName ? [gigData.skillName] : ["General"],
        },
      ]
    : defaultFeatured;

  // Generate dynamic work items based on gig data
  // Use the gig image for all items until more gig data is available
  const generateAllWork = () => {
    if (gigData?.imageUrl) {
      const variations = [
        { suffix: "Project A", tag: gigData.skillName || "General" },
        { suffix: "Project B", tag: gigData.skillName || "General" },
        { suffix: "Recent Work", tag: gigData.skillName || "General" },
        { suffix: "Portfolio Item", tag: gigData.skillName || "General" },
        { suffix: "Case Study", tag: gigData.skillName || "General" },
        { suffix: "Previous Project", tag: gigData.skillName || "General" },
      ];

      return variations.map((variant, index) => ({
        title: `${gigData.shortBio} - ${variant.suffix}`,
        img: gigData.imageUrl!,
        tag: variant.tag,
        id: `gig-${gigData.id}-${index}`,
      }));
    }
    return defaultAllWork.map((item, index) => ({
      ...item,
      id: `default-${index}`,
    }));
  };

  const allWork = generateAllWork();

  return (
    <>
      {/* Featured */}
      <h2 className="mt-8 text-xl font-semibold">Featured Work</h2>
      {featured.map((work) => (
        <div
          key={work.title}
          className="mt-4 border rounded-xl overflow-hidden"
        >
          <img
            src={work.img}
            alt={work.title}
            className="w-full auto object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium">{work.title}</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <button className="mt-4 text-sm text-green-600 font-medium">
        See all portfolio
      </button>

      {/* All Work Grid */}
      <h2 className="mt-10 text-xl font-semibold">All Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {allWork.map((item) => (
          <div key={item.id} className="border rounded-xl overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <p className="text-sm font-medium">{item.title}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-gray-100 rounded text-xs">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
