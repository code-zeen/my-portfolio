function masonryLayout() {
  const masonryContainerStyle = getComputedStyle(
      document.querySelector(".grid")
  );
  const columnGap = parseInt(
      masonryContainerStyle.getPropertyValue("column-gap")
  );
  const autoRows = parseInt(
      masonryContainerStyle.getPropertyValue("grid-auto-rows")
  );

  document.querySelectorAll(".item").forEach((elt) => {
      elt.style.gridRowEnd = `span ${Math.ceil(
          elt.querySelector(".content").scrollHeight / autoRows +
              columnGap / autoRows
      )}`;
  });
}

masonryLayout();
window.addEventListener("resize", masonryLayout);