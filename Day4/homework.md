## Question 1

**1.1.** x receives the property from `product`.

## Question 3

**3.1.** The data type of the outermost layer is `Object`.

**3.2.** The hits property is an `Object`.

**3.3.** We can use the following function:

```
let length = hits.length;
for (let i = 0; i < length; i++) {
    console.log(\n);
    console.log(`Title: ${hits[i].jobTitle}`);
    console.log(`Salary: ${hits[i].jobSalary}`);
    console.log(`Benefits: ${hits[i].benefits.join(\n)}`);
    console.log(`Skills: ${hits[i].skills.join(\n)}`);
    console.log((`Requirements: ${hits[i].jobRequirement.join(\n)}`);
}

```
