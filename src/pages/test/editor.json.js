/*
Basically serialized from YAML :

---
title:
description:
call_to_action: Contact
large_header: true
testimonials:
  - message: We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.
    testimonial_image: "https://placekitten.com/g/60/60?a=.png"
    name: Joice Carmold
  - message: Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.
    testimonial_image: "https://placekitten.com/60/60?a=.png"
    name: Peter Rottenburg
  - message: Justice Law were everything we could have hoped for when buying our first home. Highly recommended to all.
    testimonial_image: "https://placebear.com/60/60?a=.png"
    name: D. and G. Gibbleston
content_html: <p>This is the <em>Justice</em> template from <a href="https://cloudcannon.com/">CloudCannon</a>. Justice is strong foundation for the web presence of a law firm or business. It’s filled with fictitious example content to get you started.</p><p>Justice Law is professional representation. Practicing for over 50 years, our team have the knowledge and skills to get you results.</p>
---

*/

const DATA = {
  title: {
    "@id": "title",
    value: null,
    "@keys": ["value"],
    "@flat": true,
    "@initialValue": { value: null },
  },
  description: {
    "@id": "description",
    value: "FIND_MEEE",
    "@keys": ["value"],
    "@flat": true,
    "@initialValue": { value: "FIND_MEEE" },
  },
  call_to_action: {
    "@id": "call_to_action",
    value: "Contact",
    "@keys": ["value"],
    "@flat": true,
    "@initialValue": { value: "Contact" },
  },
  large_header: {
    "@id": "large_header",
    value: true,
    "@keys": ["value"],
    "@flat": true,
    "@initialValue": { value: true },
  },
  testimonials: {
    "@id": "testimonials",
    value: [
      {
        "@id": "96a8a282-bb7b-4bb5-8759-1f4cf01b7ec3",
        message: {
          "@id": "testimonials.message",
          value:
            "We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": {
            value:
              "We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.",
          },
        },
        testimonial_image: {
          "@id": "testimonials.testimonial_image",
          value: "https://placekitten.com/g/60/60?a=.png",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": {
            value: "https://placekitten.com/g/60/60?a=.png",
          },
        },
        name: {
          "@id": "testimonials.name",
          value: "Joice Carmold",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": { value: "Joice Carmold" },
        },
        "@keys": ["message", "testimonial_image", "name"],
        "@flat": false,
        "@initialValue": {
          message:
            "We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.",
          testimonial_image: "https://placekitten.com/g/60/60?a=.png",
          name: "Joice Carmold",
        },
      },
      {
        "@id": "dce749fc-360a-42d5-b348-fdfb94f5996e",
        message: {
          "@id": "testimonials.message",
          value:
            "Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": {
            value:
              "Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.",
          },
        },
        testimonial_image: {
          "@id": "testimonials.testimonial_image",
          value: "https://placekitten.com/60/60?a=.png",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": { value: "https://placekitten.com/60/60?a=.png" },
        },
        name: {
          "@id": "testimonials.name",
          value: "Peter Rottenburg",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": { value: "Peter Rottenburg" },
        },
        "@keys": ["message", "testimonial_image", "name"],
        "@flat": false,
        "@initialValue": {
          message:
            "Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.",
          testimonial_image: "https://placekitten.com/60/60?a=.png",
          name: "Peter Rottenburg",
        },
      },
      {
        "@id": "11639685-2f44-4b05-9854-b745afd3caa1",
        message: {
          "@id": "testimonials.message",
          value:
            "Justice Law were everything we could have hoped for when buying our first home. Highly recommended to all.",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": {
            value:
              "Justice Law were everything we could have hoped for when buying our first home. Highly recommended to all.",
          },
        },
        testimonial_image: {
          "@id": "testimonials.testimonial_image",
          value: "https://placebear.com/60/60?a=.png",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": { value: "https://placebear.com/60/60?a=.png" },
        },
        name: {
          "@id": "testimonials.name",
          value: "D. and G. Gibbleston",
          "@keys": ["value"],
          "@flat": true,
          "@initialValue": { value: "D. and G. Gibbleston" },
        },
        "@keys": ["message", "testimonial_image", "name"],
        "@flat": false,
        "@initialValue": {
          message:
            "Justice Law were everything we could have hoped for when buying our first home. Highly recommended to all.",
          testimonial_image: "https://placebear.com/60/60?a=.png",
          name: "D. and G. Gibbleston",
        },
      },
    ],
    "@keys": ["value"],
    "@flat": true,
    "@initialValue": [
      {
        message:
          "We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.",
        testimonial_image: "https://placekitten.com/g/60/60?a=.png",
        name: "Joice Carmold",
      },
      {
        message:
          "Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.",
        testimonial_image: "https://placekitten.com/60/60?a=.png",
        name: "Peter Rottenburg",
      },
      {
        message:
          "Justice Law were everything we could have hoped for when buying our first home. Highly recommended to all.",
        testimonial_image: "https://placebear.com/60/60?a=.png",
        name: "D. and G. Gibbleston",
      },
    ],
  },
  content_html: {
    "@id": "content_html",
    value:
      '<p>This is the <em>Justice</em> template from <a href="https://cloudcannon.com/">CloudCannon</a>. Justice is strong foundation for the web presence of a law firm or business. It’s filled with fictitious example content to get you started.</p><p>Justice Law is professional representation. Practicing for over 50 years, our team have the knowledge and skills to get you results.</p>',
    "@keys": ["value"],
    "@flat": true,
    "@initialValue": {
      value:
        '<p>This is the <em>Justice</em> template from <a href="https://cloudcannon.com/">CloudCannon</a>. Justice is strong foundation for the web presence of a law firm or business. It’s filled with fictitious example content to get you started.</p><p>Justice Law is professional representation. Practicing for over 50 years, our team have the knowledge and skills to get you results.</p>',
    },
  },
  "@keys": [
    "title",
    "description",
    "call_to_action",
    "large_header",
    "testimonials",
    "content_html",
  ],
  "@flat": false,
  "@initialValue": {
    title: null,
    description: "FIND_MEEE",
    call_to_action: "Contact",
    large_header: true,
    testimonials: [
      {
        message:
          "We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.",
        testimonial_image: "https://placekitten.com/g/60/60?a=.png",
        name: "Joice Carmold",
      },
      {
        message:
          "Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.",
        testimonial_image: "https://placekitten.com/60/60?a=.png",
        name: "Peter Rottenburg",
      },
      {
        message:
          "Justice Law were everything we could have hoped for when buying our first home. Highly recommended to all.",
        testimonial_image: "https://placebear.com/60/60?a=.png",
        name: "D. and G. Gibbleston",
      },
    ],
    content_html:
      '<p>This is the <em>Justice</em> template from <a href="https://cloudcannon.com/">CloudCannon</a>. Justice is strong foundation for the web presence of a law firm or business. It’s filled with fictitious example content to get you started.</p><p>Justice Law is professional representation. Practicing for over 50 years, our team have the knowledge and skills to get you results.</p>',
  },
};

export async function get() {
  //   const pageDetails = await getCollectionItem("pages", "about");
  //   const staffMembers = await getCollection("staff-members");

  return {
    body: {
      DATA,
    },
  };
}
