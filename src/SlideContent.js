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
  Adv: {
    1: `In the Intermediate Tutorial, we discussed conditional probability and Baye’s theorem, and how they applied to testing and infectious disease research. As a reminder, the conditional probability of event A given event B is the probability of event A and event B divided by the probability of event B. Baye’s theorem states that the conditional probability of event A given event B is the probability of event B given event A multiplied by the probability of event A, all divided by the probability of event B. In this tutorial, we will quickly investigate an example related to infectious diseases, and then we will generalize to type I and type II errors across statistics (if you are coming straight from the intermediate tutorial, the example is the same). 
    `,
    2: `Let’s lay out a quick example to cement our understanding of these values (if you took the beginner tutorial, this will look familiar). Consider a very common disease that infects \\(50\\%\\) of the \\(1,600\\) person population (highlighted in red). The FDA has approved a test with a Sensitivity of \\(0.9\\) and a Specificity of \\(0.96\\). Because this disease is so common, we’ll say that all infected people test and half of healthy people test. We can use the specificity and sensitivity to find the number of true positives \\((720)\\) true negatives \\((384)\\) false positives \\((16)\\) and false negatives \\((80)\\). From here, we see that we have all of the information we need to calculate the Positive and Negative Predictive Values.
    `,
    3: `Let’s find PPV for our example using Baye’s Theorem! The probability of testing positive given that you’re infected is just the sensitivity of the test: \\(0.9\\) (look back to the definition of sensitivity if this is unclear). The probability of testing positive is just the number of positive tests divided by the total number of people in the population: \\(\\frac{736}{1600} = 0.461\\). The probability of being infected is \\(0.5\\), as per our definition of the disease. If we plug these values into Baye’s theorem, we get \\(\\frac{0.9 * 0.5}{0.461} = 0.978\\), which matches our PPV from before! We can do the same for NPV: the specificity is \\(0.96\\), the probability that I am healthy and test is \\(0.25\\), and the probability of testing negative is \\(\\frac{464}{1600} = 0.29\\). We end up with \\(\\frac{0.96 * 0.25}{0.29} = 0.828\\). 
    `,
    4: `Formally, false positives are called type I errors (or \\(\\alpha\\) errors) and false negatives are called type II errors (or \\(\\beta\\) errors). These errors are based on a hypothesis: a statement that researchers are trying to confirm or falsify. A 2009 paper by Banerjee et. al. makes the important point that it is impossible to verify a general hypothesis through testing, but it is possible to falsify it: we can’t surely conclude that a virus is not deadly, no matter how many people recover from it; however, we can easily conclude it is deadly once a single person dies from it. Good hypotheses are simple, specific, and stated in advance of testing.
    `,
    5: `In fact, hypotheses actually come in pairs: usually, a null hypothesis and an alternative hypothesis. The null hypothesis states that there is no association between the predictor variable and the outcome: that is, there is no association between being infected and testing positive. The alternative hypothesis says that there is such an association. Let’s look at this through the lens of our example: the alternative hypothesis is that there is an association between being infected and testing positive. We would make a type I error if we concluded that a certain test did show a relationship between testing positive and being sick, when there was really no relationship. We would make a type II error if we concluded that there was no relationship, but there really was one. 
    `,
    6: `While it might seem like these errors would probably never show up when creating a test for a disease, it is important to consider the magnitude of an error, of either type. If we were to make a type I error, we could be allowing a test into the world that is completely ineffective: this could wreak havoc on many peoples lives and cause confusion and panic. If we were to make a type II error, we could be throwing away millions of dollars and thousands of lab hours needed to create the test in the first place. This is why it is so important to be as sure of our decisions as possible: one way to do this is by using a very small \\(\\alpha\\)-value. A standard \\(\\alpha\\) is \\(0.05\\), which means we think that there is only a \\(5\\%\\) chance that we will make a type I error. While we would like this value to be as low as possible, the value of \\(\\alpha\\) depends on a number of factors. The same type of value is set for \\(\\beta\\), which is the likelihood that we think we will make a type II error. 
    `,
    7: `To end this tutorial, let’s make some conclusions about our example from above. We have \\(464\\) total positive tests and \\(736\\) total negative tests: this leads to a mean of \\(0.387\\) with a standard deviation of \\(0.487\\) (assuming a positive test is \\(1\\) and a negative test is \\(0\\)). In real life, we have \\(400\\) actual healthy people and \\(800\\) actually infected people: this leads to a mean of \\(0.333\\) and a standard deviation of \\(0.472\\). After running a T-Test on the data, we end up with a p-value of \\(0.0065\\). What does this mean? It means that we must reject the null hypothesis that our test and the actual population are statistically insignificantly different: that is, our test isn’t quite good enough! There is a statistically significant difference in the number of positive and negative results and the number of actual infected and healthy people. That’s ok: COVID-19 PCR tests have sensitivity and specificity near \\(1\\), much better than our \\(0.9\\) sensitivity and \\(0.96\\) specificity. `,
  },
};
