"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import WhatCustomers from "../../what_ourCustomers/page";
import { BlogData } from "../../../../components/data/page";

const Details = () => {
  const params = useParams();
  const id = Number(params.id);
  const blog = BlogData?.find((item) => item.id === id);

  if (!blog) return <div>Not found</div>;

  return (
    <div className="container py-10 space-y-4">
      <div className="flex gap-[4px]">
        <div className="flex gap-[24px]">
          <div className="flex gap-[4px]">
            <div
              className="rotate-[0deg]
            w-[38.11823654174805px] h-1 border-[1.5px] bg-black mt-2"
            ></div>
            <p className="text-green-500">May 30,2025</p>
          </div>
          <div className="flex gap-[4px]">
            <div
              className="rotate-[0deg]
            w-[38.11823654174805px] h-1 border-[1.5px] bg-black mt-2"
            ></div>
            <p className="text-green-500">Posted by</p>
          </div>
        </div>
        <div className="w-[24px] h-[24px] bg-neutral-300 rounded-full"></div>
        <div>
          <p className="text-green-500">Bessie Edwards </p>
        </div>
      </div>
      <p className="font-bold text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut .
      </p>
      <Image
        src={blog.img}
        alt="img"
        height={300}
        width={600}
        className=" md:w-full h-[300px]"
      />
      <p>
        Novel research material” refers to original, unexplored sources or data
        sets that offer fresh perspectives on a given topic, pushing the
        boundaries of existing knowledge and inviting rigorous scholarly
        inquiry. Unlike repurposed or derivative content, novel research
        material emerges from innovative methodologies—whether through
        cutting‑edge experiments, newly digitized archives, under‑studied
        communities, or interdisciplinary synthesis—that have not yet been
      </p>
      <p>
        prompting researchers to refine theoretical frameworks and forge new
        avenues of investigation. To be truly “researchable,” such material must
        be accessible and well-documented, with clear provenance, reliable
        metadata, and methodological transparency that allow others to replicate
        or build upon initial findings
      </p>
      <p>
        . Moreover, novel research material often catalyzes collaboration across
        fields—historians might mine geospatial data to reinterpret urban
        development, while sociologists leverage machine‑learning analyses of
        social media footprints to trace emergent cultural trends—ensuring that
        breakthroughs in one discipline reverberate widely. In an era defined by
        both information overload and accelerating technological change, the
        discovery and cultivation of novel research material remain
        indispensable for driving impactful scholarship and sustaining the
        continual evolution of human understanding.
      </p>
      <h2 className="font-bold text-xl">Lorem ipsum dolor sit amet.</h2>
      <p>1. novel research material often catalyzes collaboration across fields?</p>
      <p>1. novel research material often catalyzes collaboration across fields?</p>
      <p>1. novel research material often catalyzes collaboration across fields?</p>
      <p>1. novel research material often catalyzes collaboration across fields?</p>
      <h2 className="font-bold text-xl">Lorem ipsum dolor sit amet.</h2>
        <p>
        Novel research material” refers to original, unexplored sources or data
        sets that offer fresh perspectives on a given topic, pushing the
        boundaries of existing knowledge and inviting rigorous scholarly
        inquiry. Unlike repurposed or derivative content, novel research
        material emerges from innovative methodologies—whether through
        cutting‑edge experiments, newly digitized archives, under‑studied
        communities, or interdisciplinary synthesis—that have not yet been
      </p>  <p>
        Novel research material” refers to original, unexplored sources or data
        sets that offer fresh perspectives on a given topic, pushing the
        boundaries of existing knowledge and inviting rigorous scholarly
        inquiry. Unlike repurposed or derivative content, novel research
        material emerges from innovative methodologies—whether through
        cutting‑edge experiments, newly digitized archives, under‑studied
        communities, or interdisciplinary synthesis—that have not yet been
      </p>  <p>
        Novel research material” refers to original, unexplored sources or data
        sets that offer fresh perspectives on a given topic, pushing the
        boundaries of existing knowledge and inviting rigorous scholarly
        inquiry. Unlike repurposed or derivative content, novel research
        material emerges from innovative methodologies—whether through
        cutting‑edge experiments, newly digitized archives, under‑studied
        communities, or interdisciplinary synthesis—that have not yet been
      </p>
      <h2 className="font-bold text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <h2 className="font-bold text-xl">1. Lorem ipsum dolor sit amet, consectetur. </h2>
      <p>Financial law establishes the rules governing markets, institutions, and transactions. When future lawyers, policymakers, or business leaders understand these regulations, they&lsquo;re better equipped to prevent systemic failures—such as banking crises or securities collapses—by spotting weak spots in compliance frameworks and advising on sound risk‑management practices.</p>
      <h2 className="font-bold text-xl">2. Lorem ipsum dolor sit amet, consectetur. </h2>
      <p>Financial law establishes the rules governing markets, institutions, and transactions. When future lawyers, policymakers, or business leaders understand these regulations, they&lsquo;re better equipped to prevent systemic failures—such as banking crises or securities collapses—by spotting weak spots in compliance frameworks and advising on sound risk‑management practices.</p>
      <h2 className="font-bold text-xl">3. Lorem ipsum dolor sit amet, consectetur. </h2>
      <p>Financial law establishes the rules governing markets, institutions, and transactions. When future lawyers, policymakers, or business leaders understand these regulations, they&lsquo;re better equipped to prevent systemic failures—such as banking crises or securities collapses—by spotting weak spots in compliance frameworks and advising on sound risk‑management practices.</p>
      <h2 className="font-bold text-xl">4. Lorem ipsum dolor sit amet, consectetur. </h2>
      <p>Financial law establishes the rules governing markets, institutions, and transactions. When future lawyers, policymakers, or business leaders understand these regulations, they&lsquo;re better equipped to prevent systemic failures—such as banking crises or securities collapses—by spotting weak spots in compliance frameworks and advising on sound risk‑management practices.</p>
      <h2 className="font-bold text-xl">5. Lorem ipsum dolor sit amet, consectetur. </h2>
      <p>Financial law establishes the rules governing markets, institutions, and transactions. When future lawyers, policymakers, or business leaders understand these regulations, they&lsquo;re better equipped to prevent systemic failures—such as banking crises or securities collapses—by spotting weak spots in compliance frameworks and advising on sound risk‑management practices.</p>
      <h2 className="font-bold text-xl">6. Lorem ipsum dolor sit amet, consectetur. </h2>
      <p>Financial law establishes the rules governing markets, institutions, and transactions. When future lawyers, policymakers, or business leaders understand these regulations, they&lsquo;re better equipped to prevent systemic failures—such as banking crises or securities collapses—by spotting weak spots in compliance frameworks and advising on sound risk‑management practices.</p>
      <WhatCustomers/>
    </div>
  );
};

export default Details;
