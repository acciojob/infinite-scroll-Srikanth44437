let itemCount = 1;
      const container = document.querySelector("#infi-list");
      function generateElements(n) {
        for (let i = 0; i < n; i++) {
          const element = document.createElement("div");
          element.innerText = `Item ${itemCount++}`;
          element.className = "item";
          container.appendChild(element);
        }
      }
      generateElements(10);

      container.addEventListener("scroll", () => {
        console.log(container.scrollTop);
        // maximumScrollableHeight = 500px - 400px = 100px
        const maximumScrollableHeight =
          container.scrollHeight - container.clientHeight;
        const scrolledHeight = container.scrollTop;

        let remainingScrollableHeight =
          maximumScrollableHeight - scrolledHeight;
        // threshold to reach  the bottom is 5px
        if (remainingScrollableHeight <= 5) {
          generateElements(10);
        }
      });

