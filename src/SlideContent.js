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
};
