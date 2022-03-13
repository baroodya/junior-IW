export const SlideContent = {
  Basic: {
    1: `
    Consider a very common disease, like a Common Cold. This disease
    is well-researched and very infectious. The FDA (American Food and
    Drug Administration) has reported that a certain test for this
    disease has a Sensitivity of \\(90\\%\\) and a Specificity of \\(96\\%\\).
    Sensitivity is representative of how many actual cases of the
    disease the test detects: this is also known as the True Positive
    Rate. Specificity is representative of how often an uninfected
    person would test negative: this is also known as the True Negative
    Rate. On the right, there is a population of \\(1,600\\) people who we’re 
    going to use to explore what these values mean for you.
`,
    2: `
    As this disease is very common, let's say that \\(50\\%\\) of the population
    actually get infected (this portion is highlighted in red, while the
    healthy portion is in green). While the high Specificity and 
    Sensitivity values seem to bode well for this test, they do not tell 
    the whole story. There are a few more values that can help fill out 
    our view of this test: Positive Predictive Value and Negative 
    Predictive Value. Positive Predictive Value is the likelihood that I 
    actually have this disease, given that I have tested positive. 
    Negative Predictive Value is the likelihood that I am healthy, given 
    that I have tested negative. These are examples of Conditional 
    Probability, which is covered in the Intermediate Tutorial. As 
    everyday people, these two metrics will give us the most information 
    on our test results.
`,
    3: `
    Because this disease is so common, let’s assume that all infected 
    people and half of the healthy people (\\(25\\%\\) of the population) test 
    for the disease. As the Sensitivity is \\(90\\%\\), we know that \\(90\\%\\) of the 
    infected people who test will test positive: this equates to \\(720\\) 
    infected people testing positive. This also means that \\(80\\) infected 
    people tested negative. As the Specificity is \\(96\\%\\), we know that \\(96\\%\\) 
    of the healthy people who test will test negative: this equates to 
    \\(384\\) healthy people who tested negative and \\(16\\) healthy people who 
    tested positive. 
`,
    4: `
    We can now calculate the more descriptive metrics. There were 
    \\(720+16 = 736\\) people total who tested positive, around \\(46\\%\\) of the 
    population. There were \\(384+80 = 464\\) people total who tested negative, 
    \\(29\\%\\) of the population. To find the Positive Predictive Value, we need 
    to find the ratio of the number of true positive tests to the number 
    of positive tests in total. This is \\(\\frac{720}{736}\\), which is about \\(98\\%\\). That 
    means that, if you test positive, you have a \\(97\\%\\) chance of actually 
    being infected. That’s pretty good! However, the Negative Predictive 
    Value is not as promising: \\(384\\) healthy people tested negative out of 
    464 total negative tests, which puts the Negative Predictive Value at 
    around 83%.
`,
    5: `
    Now let’s consider a less common, more severe disease, one that 
    infects only \\(10\\%\\) of the population (\\(160\\) people). Because it is so 
    rare, let’s say it has a sensitivity of \\(80\\%\\) and a specificity of \\(90\\%\\). 
    However, because it is so severe, everyone in the population tests 
    for it. This means that \\(128\\) infected people will test positive, \\(32\\) 
    infected people will test negative, \\(1,296\\) healthy people will test 
    negative, and \\(144\\) healthy people will test positive.
`,
    6: `
    This means that the Positive Predictive Value is \\(\\frac{128}{144+128}\\), which 
    is only around \\(47\\%\\)! However, it also means that the Negative 
    Predictive Value is \\(\\frac{1,296}{1,296 + 32}\\), which is almost \\(98\\%\\). This 
    makes sense because the disease is so much less infectious: we are 
    much more likely to be healthy, so negative tests are more likely to 
    be correct and positive tests are more likely to be incorrect. This 
    is why it’s so important to come up with accurate tests, especially 
    for uncommon diseases! We just used an idea called Conditional 
    Probability to calculate the Positive and Negative Predictive Values: 
    you can learn more about it, along with Baye’s Theorem, in the 
    Intermediate Tutorial. 
    `,
  },
  Inter: {
    1: `
    In the Beginner Tutorial, we discussed Sensitivity, Specificity, and Predictive values for two different diseases. As a reminder, Sensitivity, also known as the True Positive Rate, is the likelihood that an infected person will test positive \\(\\frac{\\text{true positives}}{\\text{all positives}}\\); Specificity, also known as the True Negative Rate, is the likelihood that a healthy person will test negative \\(\\frac{\\text{true negatives}}{\\text{all negatives}}\\). In addition, the Positive Predictive Value is the likelihood that, given that they tested positive, a person is infected; the Negative Predictive Value is the likelihood that, given they tested negative, a person is healthy. In this tutorial, we will discuss the mathematical origins of these values.
    `,
    2: `Let’s layout a quick example to cement our understanding of these values (if you took the beginner tutorial, this will look familiar). Consider a very common disease that infects \\(50\\%\\) of the \\(1,600\\) person population (highlighted in red). The FDA has approved a test with a Sensitivity of \\(0.9\\) and a Specificity of \\(0.96\\). Because this disease is so common, we’ll say that all infected people test and half of healthy people test. We can use the specificity and sensitivity to find the number of true positives (\\(720\\)) true negatives (\\(384\\)) false positives (\\(16\\)) and false negatives (\\(80\\)). From here, we see that we have all of the information we need to calculate the Positive and Negative Predictive Values.
    `,
    3: `First, however, we need to look into how we arrive at these values: Conditional Probability and Bayes Theorem. Conditional Probability is simply the likelihood of event A occurring, given that event B has occurred. We can break down Positive Predictive Value in our example: event A is being infected with the disease and event B is testing positive. We want to find the probability that you are actually infected, given that you tested positive on a test. In order to find this value, all that needs to be done is to change the size of the population we’re searching through. If we’re searching for the Probability of event A given event B, all we need to do is count the number of times event A and event B both happen, and divide by the number of times event B happens.
    `,
    4: `Let’s use the idea of conditional probability to calculate the Positive and Negative Predictive Values in our example. Let’s do PPV first: event A is being infected, while event B is testing positive. A quick reminder here that we musn’t include those who didn’t test in our calculations, as they never received a test result! We need to take the number of people who both tested positive and are actually infected (the large red block at the bottom) and divide it by the total number of people who tested positive (both the red blocks). This equates to \\(\\frac{720}{736} = 0.978\\). That means that there is a \\(0.978\\) probability that your positive test result is accurate: pretty good! Now for NPV: we need to take the number of healthy people who tested negative and divide by the total number of people who tested negative: \\(\\frac{384}{464} = 0.828\\). That means that there is a \\(0.828\\) probability that your negative test result is accurate.
    `,
    5: `While using the definition of conditional probability is easy and intuitive in this case, it is not always so nice. Because of that, we need a more general way to calculate conditional probability: Baye’s theorem. This theorem (defined to the right) acts as both a way to calculate a single probability and move between conditional probabilities easily. Again, let’s consider PPV: event A is actually being infected, and event B is testing positive. In order to calculate PPV using Baye’s theorem, we need the probability of testing positive given that you’re infected, the probability of testing positive, and the probability of being infected. 
    `,
    6: `Let’s find PPV for our example using Baye’s Theorem! The probability of testing positive given that you’re infected is just the sensitivity of the test: \\(0.9\\) (look back to the definition of sensitivity if this is unclear). The probability of testing positive is just the number of positive tests divided by the total number of people in the population: \\(\\frac{736}{1600} = 0.461\\). The probability of being infected is \\(0.5\\), as per our definition of the disease. If we plug these values into Baye’s theorem, we get \\(\\frac{0.9 * 0.5}{0.461} = 0.978\\), which matches our PPV from before! We can do the same for NPV: the specificity is \\(0.96\\), the probability that I am healthy and test is \\(0.25\\), and the probability of testing negative is \\(\\frac{464}{1600} = 0.29\\). We end up with \\(\\frac{0.96 * 0.25}{0.29} = 0.828\\). 
    `,
    7: `
    In our calculations of PPV and NPV above, one value is much harder for researchers to collect than the others: the actual probability of being healthy or infected. However, we can use algebra to rearrange Baye’s Theorem in order to find this number! We have already shown in this tutorial that, in this specific case of testing for a disease, we can calculate PPV and NPV without Baye’s theorem, so we can use that to our advantage. Researchers can use PPV, the test’s Sensitivity, the number of positive tests, and the size of the population to calculate the probability that any given person is infected with the disease. While this is not perfectly accurate, it does give a good estimate to our researchers, which is tremendously helpful for public health guidelines.
    `,
  },
};
