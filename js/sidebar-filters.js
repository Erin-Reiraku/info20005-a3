/* Data definition for filter accordion groups */
const filters = [
  {
    title: "Price",
    name: "price",
    options: [
      { label: "$0 - $50", value: "0-50" },
      { label: "$51 - $100", value: "51-100" },
      { label: "$101 - $200", value: "101-200" },
      { label: "$201 - $300", value: "201-300" },
      { label: "$300+", value: "300+" }
    ]
  },
  {
    title: "Availability",
    name: "availability",
    options: [
      { label: "In Stock", value: "in-stock" },
      { label: "Pre-order", value: "pre-order" },
      { label: "Sold Out", value: "sold-out" }
    ]
  },
  {
    title: "Size",
    name: "size",
    options: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "XL", value: "xl" },
      { label: "XXL+", value: "xxl" },
      { label: "Custom Size", value: "custom" }
    ]
  },
  {
    title: "Colour",
    name: "colour",
    options: [
    { label: "Black", value: "black", colorCode: "#000000" },
    { label: "White", value: "white", colorCode: "#ffffff" },
    { label: "Pink", value: "pink", colorCode: "#D2AAAF" },
    { label: "Blue", value: "blue", colorCode: "#385E93" }
    ]
  },
  {
    title: "Collection",
    name: "collection",
    options: [
      { label: "Tea Time at Grandma's", value: "tea-time-grandmas" },
      { label: "Spooky Gotchi", value: "spooky-gotchi" },
      { label: "Galaxy Witch", value: "galaxy-witch" }
    ]
  }
];

/* Inject all accordion filters into the sidebar */
const sidebar = document.getElementById('filter-accordion');
filters.forEach(f => sidebar.appendChild(createFilterAccordion(f.title, f.name, f.options)));
