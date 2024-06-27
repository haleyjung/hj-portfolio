// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My Journey</SectionHeading>
//       <VerticalTimeline lineColor="rgba(229, 231, 235, 0.5)">
//         {experiencesData.map((item) => (
//           <React.Fragment key={item.id}>
//             <VerticalTimelineElement
//               className="pointer-events-none select-none"
//               visible={true}
//               contentStyle={{
//                 background:
//                   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                 boxShadow: "none",
//                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                 textAlign: "left",
//                 padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight:
//                   theme === "light"
//                     ? "0.4rem solid #9ca3af"
//                     : "0.4rem solid rgba(255, 255, 255, 0.5)",
//               }}
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 background:
//                   theme === "light" ? "white" : "rgb(59, 130, 246)",
//                 fontSize: "1.5rem",
//               }}
//             >
//               <h3 className="font-semibold capitalize pointer-events-none select-none">
//                 {item.title}
//               </h3>
//               <p className="font-normal !mt-0 pointer-events-none select-none">
//                 {item.location}
//               </p>
//               <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 pointer-events-none select-none">
//                 {item.description}
//               </p>
//               <ul className="flex flex-wrap pt-3 gap-2 sm:mt-auto">
//                 {item.tags.map((tag) => (
//                   <li
//                     className="bg-emerald-500/[0.7] dark:bg-emerald-600 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
//                     key={tag.id}
//                   >
//                     {tag.trait}
//                   </li>
//                 ))}
//               </ul>

//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }
