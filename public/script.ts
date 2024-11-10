enum ButtonType {
  Inc = "inc",
  Dec = "dec",
}

enum Port {
  defaultPort = "http://localhost:3000",
}

const incButton = document.getElementById("inc-button") as HTMLButtonElement;
const decrButton = document.getElementById("decr-button") as HTMLButtonElement;
const incCount = document.getElementById("inc-count") as HTMLSpanElement;
const decCount = document.getElementById("dec-count") as HTMLSpanElement;

const updateCount = async (type: ButtonType): Promise<void> => {
  try {
    const response = await fetch(`${Port.defaultPort}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    incCount.textContent = data.incCount.toString();
    decCount.textContent = data.decCount.toString();
  } catch (error) {
    console.error("Error updating count:", error);
  }
};

incButton.addEventListener("click", async () => {
  await updateCount(ButtonType.Inc);
});

decrButton.addEventListener("click", async () => {
  await updateCount(ButtonType.Dec);
});
