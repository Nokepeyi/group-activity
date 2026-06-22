# **The Challenge:**

Build an interactive **Student Profile Card** that generates a personalized greeting card with the student's name, age, and subjects. The card should update in real-time as the user types.

---

## **What You Need to Build:**

A web page where:
1. User types their **name** in an input field
2. User types their **age** in an input field  
3. User types their **favorite subject** in an input field
4. A **card appears** showing: "Hello [name]! You are [age] years old. You love [subject]!"
5. The card **updates instantly** as they type (no button needed)
6. Card text color changes based on **age** (young = green, older = blue)

---

## **Visual Example:**

```
INPUT FIELDS:
┌─────────────────────────┐
│ Name: [John          ]  │
│ Age:  [16           ]   │
│ Subject: [JavaScript ]  │
└─────────────────────────┘

CARD OUTPUT (appears below):
┌─────────────────────────────────────┐
│  Hello John!                        │
│  You are 16 years old.              │
│  You love JavaScript!               │
│                                     │
│  [Green text because age < 18]      │
└─────────────────────────────────────┘
```

---

## **HTML Starter Code:**

### Copy and save this as `index.html` and separate the relevant code to its relevant files:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Profile Card</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
    }

    .container {
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 100%;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }

    .input-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      box-sizing: border-box;
      transition: border-color 0.3s;
    }

    input:focus {
      outline: none;
      border-color: #667eea;
    }

    #card {
      margin-top: 40px;
      padding: 30px;
      border-radius: 10px;
      background: #f5f5f5;
      text-align: center;
      font-size: 18px;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: bold;
      transition: all 0.3s;
    }

    #card.young {
      background: #d4edda;
      color: #155724;
      border: 2px solid #28a745;
    }

    #card.adult {
      background: #d1ecf1;
      color: #0c5460;
      border: 2px solid #17a2b8;
    }

    #card.empty {
      background: #f5f5f5;
      color: #999;
      border: 2px solid #ddd;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👤 Student Profile Card</h1>

    <div class="input-group">
      <label for="name">Your Name:</label>
      <input type="text" id="name" placeholder="Enter your name">
    </div>

    <div class="input-group">
      <label for="age">Your Age:</label>
      <input type="number" id="age" placeholder="Enter your age">
    </div>

    <div class="input-group">
      <label for="subject">Favorite Subject:</label>
      <input type="text" id="subject" placeholder="Enter your favorite subject">
    </div>

    <div id="card" class="empty">
      Fill in the fields above to generate your card ↑
    </div>
  </div>

  <script>
    // Get the input elements
 
    // TODO 1: Create a function called updateCard()
    // This function should:
    // - Get values from all three inputs
    // - If ANY input is empty, show the placeholder message and set class to "empty"
    // - If ALL inputs are filled:
    //   * Show the message: "Hello [name]! You are [age] years old. You love [subject]!"
    //   * If age < 18: set card class to "young"
    //   * If age >= 18: set card class to "adult"

    function updateCard() {
      // YOUR CODE HERE
    }

    // TODO 2: Add event listeners
    // When user types in ANY of the three input fields, the updateCard() function should run
    // Use: addEventListener("input", updateCard)

    // YOUR CODE HERE

    // Initial call
    updateCard();
  </script>
</body>
</html>
```

---

## **Your Task - Fill in the JavaScript:**

### **TODO 1: Write the updateCard() function**

This function needs to:

1. **Get the input values:**
   ```javascript
   const name = nameInput.value;
   const age = ageInput.value;
   const subject = subjectInput.value;
   ```

2. **Check if inputs are empty:**
   - If name is empty OR age is empty OR subject is empty:
     - Set `card.textContent` to: `"Fill in the fields above to generate your card ↑"`
     - Set `card.className` to: `"empty"`
     - STOP (return)

3. **If all inputs have values:**
   - Create message: ``Hello ${name}! You are ${age} years old. You love ${subject}!``
   - Set `card.textContent` to this message
   - Check the age:
     - If age < 18: Set `card.className` to `"young"` (green card)
     - If age >= 18: Set `card.className` to `"adult"` (blue card)

### **TODO 2: Add event listeners**

After the function, add these lines:
```javascript
nameInput.addEventListener("input", updateCard);
ageInput.addEventListener("input", updateCard);
subjectInput.addEventListener("input", updateCard);
```

---

## **Hint Guide:**

**Stuck on checking empty inputs?**
```javascript
if (!name || !age || !subject) {
  // This means: if name is empty OR age is empty OR subject is empty
}
```

**Stuck on template literals?**
```javascript
const message = `Hello ${name}!`; // This shows: "Hello John!"
```

**Stuck on checking age?**
```javascript
if (age < 18) {
  // do something
} else {
  // do something else
}
```

---

## **Testing Checklist:**

Before you're done, test these scenarios:

- [ ] Type "John" in name field → Card updates with "Hello John!"
- [ ] Type "16" in age field → Card updates with age, shows GREEN (young)
- [ ] Type "JavaScript" in subject → Card shows subject
- [ ] Type "25" in age field → Card changes to BLUE (adult)
- [ ] Delete the name field → Card shows placeholder message
- [ ] Fill everything again → Card shows your profile

---


## **DOM Methods You're Using:**

 `document.getElementById()` - Select elements  
 `.value` - Get input text  
 `.textContent` - Change what the card shows  
 `.className` - Change the card's style class  
 `.addEventListener()` - Listen for typing  
 Template literals `` `${variable}` `` - Insert values into text  

---

## **When You Finish:**

1. Save the file as `index.html`
2. Open it in your browser (double-click the file)
3. Test by typing in the fields
4. push to Github (one member) and share the link

---
