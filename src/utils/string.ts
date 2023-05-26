export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const mergeClasses = (classes: unknown[]) => {
  return classes.filter(Boolean).join(" ");
};

export const letterCapitalize = (str: string): string => {
  let arr = str.split(" ");
  arr.forEach(function (item, index) {
    arr[index] = item.replace(item[0], item[0].toUpperCase());
  });

  return arr.join(" ");
};

export const convertSlugToString = (slug: string): string => {
  return slug.toLowerCase().replaceAll("-", " ");
};
