export const SlideContent = {
  Basic: {
    1: {
      1: `
        Consider a very common disease, like a Common Cold. This disease
        is well-researched and very infectious. The FDA (American Food and
        Drug Administration) has reported that a certain test for this
        disease has a \\(\\textbf{Sensitivity}\\) of \\(90\\%\\) and a \\(\\textbf{Specificity}\\) of \\(96\\%\\).`,

      2: `
        \\(\\textbf{Sensitivity}\\) is representative of how many actual cases of the
        disease the test detects: this is also known as the \\(\\textbf{True Positive}\\) \\(\\textbf{Rate}\\).`,
      3: `
        \\(\\textbf{Specificity}\\) is representative of how often an uninfected
        person would test negative: this is also known as the \\(\\textbf{True}\\) \\(\\textbf{Negative Rate.}\\)`,
      4: `
        On the right, there is a population of \\(1,600\\) people who we're 
        going to use to explore what these values mean for you.`,
    },
    2: {
      1: `
        As this disease is very common, let's say that \\(50\\%\\) of the population
        actually get infected (this portion is highlighted in red, while the
        healthy portion is in green). While the high \\(\\textbf{Specificity}\\) and 
        \\(\\textbf{Sensitivity}\\) values seem to bode well for this test, they do not tell 
        the whole story. There are a few more values that can help fill out 
        our view of this test: \\(\\textbf{Positive Predictive Value}\\)  and \\(\\textbf{Negative}\\) \\(\\textbf{Predictive Value}\\).`,
      2: `
        \\(\\textbf{Positive Predictive Value}\\)  is the likelihood that I 
        actually have this disease, given that I have tested positive.`,
      3: ` 
        \\(\\textbf{Negative Predictive Value}\\)  is the likelihood that I am healthy, given 
        that I have tested negative.`,
      4: ` These are examples of \\(\\textbf{Conditional Probability,}\\) 
        which is covered in the Intermediate Tutorial. As 
        everyday people, these two metrics will give us the most information 
        on our test results.`,
    },
    3: {
      1: `
        Because this disease is so common, let's assume that all infected 
        people and half of the healthy people (\\(25\\%\\) of the population) test 
        for the disease (these people are outlined in white).`,
      2: `
        As the \\(\\textbf{Sensitivity}\\) is \\(90\\%\\), we know that \\(90\\%\\) of the 
        infected people who test will test positive: this equates to \\(720\\) 
        infected people testing positive. This also means that \\(80\\) infected 
        people tested negative.`,
      3: `
        As the \\(\\textbf{Specificity}\\) is \\(96\\%\\), we know that \\(96\\%\\) 
        of the healthy people who test will test negative: this equates to 
        \\(384\\) healthy people who tested negative and \\(16\\) healthy people who 
        tested positive.`,
    },
    4: {
      1: `
        We can now calculate the more descriptive metrics. There were 
        \\(720+16 = 736\\) people total who tested positive, around \\(46\\%\\) of the 
        population. There were \\(384+80 = 464\\) people total who tested negative, 
        \\(29\\%\\) of the population.`,
      2: `
        To find the \\(\\textbf{Positive }\\) \\(\\textbf{Predictive Value,}\\) we need 
        to find the ratio of the number of true positive tests to the number 
        of positive tests in total. This is \\(\\frac{720}{736}\\), which is about \\(98\\%\\). That 
        means that, if you test positive, you have a \\(98\\%\\) chance of actually 
        being infected.`,
      3: `
        That's pretty good! However, the \\(\\textbf{Negative Predictive Value}\\)
        is not as promising: \\(384\\) healthy people tested negative out of 
        464 total negative tests, which puts the \\(\\textbf{Negative Predictive Value}\\)  at 
        around 83%.`,
    },
    5: {
      1: `
        Now let's consider a less common, more severe disease, one that 
        infects only \\(10\\%\\) of the population (\\(160\\) people). Because it is so 
        rare, let's say it has a \\(\\textbf{Sensitivity}\\)  of \\(80\\%\\) and a \\(\\textbf{Specificity}\\)  of \\(90\\%\\).`,
      2: ` 
        However, because it is so severe, everyone in the population tests 
        for it. This means that \\(128\\) infected people will test positive, \\(32\\) 
        infected people will test negative, \\(1,296\\) healthy people will test 
        negative, and \\(144\\) healthy people will test positive.`,
    },
    6: {
      1: `
        This means that the \\(\\textbf{Positive Predictive Value}\\)  is \\(\\frac{128}{144+128}\\), which 
        is only around \\(47\\%\\)! However, it also means that the \\(\\textbf{Negative Predictive Value}\\)
        is \\(\\frac{1,296}{1,296 + 32}\\), which is almost \\(98\\%\\).`,
      2: `
        This makes sense because the disease is so much less infectious: we are 
        much more likely to be healthy, so negative tests are more likely to 
        be correct and positive tests are more likely to be incorrect. This 
        is why it's so important to come up with accurate tests, especially 
        for uncommon diseases!`,
      3: `
        We just used an idea called \\(\\textbf{Conditional}\\) \\(\\textbf{Probability}\\) 
        to calculate the \\(\\textbf{Positive}\\) and \\(\\textbf{Negative}\\) \\(\\textbf{Predictive Values}\\): 
        you can learn more about it, along with \\(\\textbf{Bayes' Theorem}\\), in the 
        Intermediate Tutorial.`,
    },
  },
  Inter: {
    1: {
      1: `
        In the Beginner Tutorial, we discussed \\(\\textbf{Sensitivity}\\), 
        \\(\\textbf{Specificity}\\), and \\(\\textbf{Predictive Values}\\) for two 
        different diseases.`,
      2: `
        As a reminder, \\(\\textbf{Sensitivity}\\), also known as the 
        \\(\\textbf{True Positive Rate}\\), is the likelihood that an infected 
        person will test positive, 
        \\(\\frac{\\text{true positives}}{\\text{all positives}}\\).`,
      3: `
        \\(\\textbf{Specificity}\\), also known as the 
        \\(\\textbf{True Negative Rate}\\), is the likelihood that a healthy 
        person will test negative, 
        \\(\\frac{\\text{true negatives}}{\\text{all negatives}}\\).`,
      4: `
        In addition, the \\(\\textbf{Positive Predictive Value}\\)  is the 
        likelihood that, given that they tested positive, a person is infected; 
        the \\(\\textbf{Negative}\\) \\(\\textbf{Predictive Value}\\) is the 
        likelihood that, given they tested negative, a person is healthy. In 
        this tutorial, we will discuss the mathematical origins of these values.`,
    },
    2: {
      1: `
        Let's layout a quick example to cement our understanding of these values 
        (if you took the beginner tutorial, this will look familiar). Consider a 
        very common disease that infects \\(50\\%\\) of the \\(1,600\\) person 
        population (highlighted in red). The FDA has approved a test with a 
        \\(\\textbf{Sensitivity}\\) of \\(0.9\\) and a 
        \\(\\textbf{Specificity}\\) of \\(0.96\\).`,
      2: `
        Because this disease is so common, we'll say that all infected people 
        test and half of healthy people test (these people are outlined in 
        white). We can use the \\(\\textbf{Specificity}\\) and 
        \\(\\textbf{Sensitivity}\\) to find the number of true positives 
        \\((720)\\), true negatives \\((384)\\), false positives \\((16)\\),
        and false negatives \\((80)\\).`,
      3: `
        From here, we see that we have all of 
        the information we need to calculate the \\(\\textbf{Positive}\\) and 
        \\(\\textbf{Negative Predictive}\\) \\(\\textbf{Values}\\).`,
    },
    3: {
      1: `
        First, however, we need to look into how we arrive at these values: 
        \\(\\textbf{Conditional Probability}\\) and 
        \\(\\textbf{Bayes' Theorem}\\).`,
      2: `
        \\(\\textbf{Conditional Probability}\\) is simply the likelihood of 
        event A occurring, given that event B has occurred. We can break down 
        \\(\\textbf{Positive Predictive Value}\\) in our example: event A is 
        being infected with the disease and event B is testing positive.`,
      3: `
        We want to find the probability that you are actually infected, given 
        that you tested positive on a test. In order to find this value, all 
        that needs to be done is to change the size of the population we're 
        searching through.`,
      4: `
        If we're searching for the Probability of event A given event B, 
        \\(\\mathbb{P}\\{A|B\\}\\), all we need to do is count the probability 
        that event A and event B both happen, \\(\\mathbb{P}\\{A\\cap B\\}\\), 
        and divide by the probability that event B happens, 
        \\(\\mathbb{P}\\{B\\}\\).`,
    },
    4: {
      1: `
        Let's use the idea of \\(\\textbf{Conditional Probability}\\) to 
        calculate the Positive and \\(\\textbf{Negative Predictive Values}\\) in 
        our example.`,
      2: `
        Let's do \\(\\textbf{PPV}\\) first: event A is being infected, while 
        event B is testing positive. A quick reminder here that we musn't 
        include those who didn't test in our calculations, as they never 
        received a test result! We need to take the number of people who both 
        tested positive and are actually infected (the large red block at the 
        bottom) and divide it by the total number of people who tested positive 
        (both the red blocks). This equates to \\(\\frac{720}{736} = 0.978\\). 
        That means that there is a \\(0.978\\) probability that your positive 
        test result is accurate: pretty good!`,
      3: `
        Now for \\(\\textbf{NPV}\\): we need to take the number of healthy 
        people who tested negative and divide by the total number of people who 
        tested negative: \\(\\frac{384}{464} = 0.828\\). That means that there 
        is a \\(0.828\\) probability that your negative test result is 
        accurate.`,
    },
    5: {
      1: `
        While using the definition of \\(\\textbf{Conditional Probability}\\) is 
        easy and intuitive in this case, it is not always so nice. Because of 
        that, we need a more general way to calculate 
        \\(\\textbf{Conditional Probability}\\): 
        \\(\\textbf{Bayes' Theorem}\\).`,
      2: `
        This theorem (defined to the right) acts as both a way to calculate a 
        single probability and move between conditional probabilities easily. 
        Again, let's consider \\(\\textbf{PPV}\\): event A is actually being 
        infected, and event B is testing positive.`,
      3: `
        In order to calculate \\(\\textbf{PPV}\\) using 
        \\(\\textbf{Bayes' Theorem}\\), we need the probability of testing 
        positive given that you're infected, the probability of testing 
        positive, and the probability of being infected.`,
    },
    6: {
      1: `
        Let's find \\(\\textbf{PPV}\\) for our example using 
        \\(\\textbf{Bayes' Theorem}\\)!`,
      2: `
        The probability of testing positive given that you're infected is just 
        the \\(\\textbf{Sensitivity}\\) of the test: \\(0.9\\) (look back to 
        the definition of \\(\\textbf{Sensitivity}\\) if this is unclear). The 
        probability of testing positive is just the number of positive tests 
        divided by the total number of people in the population: 
        \\(\\frac{736}{1600} = 0.461\\). The probability of being infected is 
        \\(0.5\\), as per our definition of the disease. If we plug these values 
        into \\(\\textbf{Bayes' Theorem}\\), we get 
        \\(\\frac{0.9 * 0.5}{0.461} = 0.978\\), which matches our 
        \\(\\textbf{PPV}\\) from before!`,
      3: `
        We can do the same for \\(\\textbf{NPV}\\): the 
        \\(\\textbf{Specificity}\\)  is \\(0.96\\), the probability that I am 
        healthy and test is \\(0.25\\), and the probability of testing negative 
        is \\(\\frac{464}{1600} = 0.29\\). We end up with 
        \\(\\frac{0.96 * 0.25}{0.29} = 0.828\\). `,
    },
    7: {
      1: `
        In our calculations of \\(\\textbf{PPV}\\) and \\(\\textbf{NPV}\\) 
        above, one value is much harder for researchers to collect than the 
        others: the actual probability of being healthy or infected.`,
      2: `
        However, we can use algebra to rearrange \\(\\textbf{Bayes' Theorem}\\) 
        in order to find this number! We have already shown in this tutorial 
        that, in this specific case of testing for a disease, we can calculate 
        \\(\\textbf{PPV}\\) and \\(\\textbf{NPV}\\) without 
        \\(\\textbf{Bayes'}\\) \\(\\textbf{Theorem}\\), so we can use that to 
        our advantage.`,
      3: `
        Researchers can use \\(\\textbf{PPV}\\), the test's 
        \\(\\textbf{Sensitivity}\\), the number of positive tests, and the size 
        of the population to calculate the probability that any given person is 
        infected with the disease. While this is not perfectly accurate, it does 
        give a good estimate to our researchers, which is tremendously helpful 
        for public health guidelines.`,
    },
  },
  Adv: {
    1: {
      1: `
        In the Intermediate Tutorial, we discussed 
        \\(\\textbf{Conditional Probability}\\) and 
        \\(\\textbf{Bayes' Theorem}\\), and how they applied to testing and 
        infectious disease research.`,
      2: `
        As a reminder, the \\(\\textbf{Conditional Probability}\\) of event A 
        given event B is the probability of event A and event B divided by the 
        probability of event B.`,
      3: `
        \\(\\textbf{Bayes' Theorem}\\)  states that the 
        \\(\\textbf{Conditional}\\) \\(\\textbf{Probability}\\) of event A given 
        event B is the probability of event B given event A multiplied by the 
        probability of event A, all divided by the probability of event B.`,
      4: `
        In this tutorial, we will quickly investigate an example related to 
        infectious diseases, and then we will generalize to \\(\\textbf{type I}\\) and 
        \\(\\textbf{type II}\\) errors across statistics (if you are coming 
        straight from the intermediate tutorial, the example is the same).`,
    },
    2: {
      1: `
        Let's layout a quick example to cement our understanding of these values 
        (if you took the beginner tutorial, this will look familiar). Consider a 
        very common disease that infects \\(50\\%\\) of the \\(1,600\\) person 
        population (highlighted in red). The FDA has approved a test with a 
        \\(\\textbf{Sensitivity}\\) of \\(0.9\\) and a 
        \\(\\textbf{Specificity}\\) of \\(0.96\\).`,
      2: `
        Because this disease is so common, we'll say that all infected people 
        test and half of healthy people test (these people are outlined in 
        white). We can use the \\(\\textbf{Specificity}\\) and 
        \\(\\textbf{Sensitivity}\\) to find the number of true positives 
        \\((720)\\), true negatives \\((384)\\), false positives \\((16)\\),
        and false negatives \\((80)\\).`,
      3: `
        From here, we see that we have all of 
        the information we need to calculate the \\(\\textbf{Positive}\\) and 
        \\(\\textbf{Negative Predictive}\\) \\(\\textbf{Values}\\).`,
    },
    3: {
      1: `
        Let's find \\(\\textbf{PPV}\\) for our example using 
        \\(\\textbf{Bayes' Theorem.}\\) The probability of testing positive 
        given that you're infected is just the \\(\\textbf{Sensitivity}\\) of 
        the test: \\(0.9\\) (look back to the definition of 
          \\(\\textbf{Sensitivity}\\)  if this is unclear).`,
      2: `
        The probability of testing positive is just the number of positive tests 
        divided by the total number of people in the population: 
        \\(\\frac{736}{1600} = 0.461\\). The probability of being infected is 
        \\(0.5\\), as per our definition of the disease.`,
      3: `
        If we plug these values into \\(\\textbf{Bayes' Theorem}\\), we get 
        \\(\\frac{0.9 * 0.5}{0.461} = 0.978\\), which matches our 
        \\(\\textbf{PPV}\\) from before! We can do the same for 
        \\(\\textbf{NPV}\\): the \\(\\textbf{Specificity}\\)  is \\(0.96\\), the  
        that I am healthy and test is \\(0.25\\), and the probability of testing 
        negative is \\(\\frac{464}{1600} = 0.29\\). We end up with 
        \\(\\frac{0.96 * 0.25}{0.29} = 0.828\\). `,
    },
    4: {
      1: `
        Formally, false positives are called \\(\\textbf{type I error}\\)s (or 
        \\(\\alpha\\) errors) and false negatives are called 
        \\(\\textbf{type II error}\\)s (or \\(\\beta\\) errors). These errors 
        are based on a hypothesis: a statement that researchers are trying to 
        confirm or falsify.`,
      2: `
        A 2009 paper by Banerjee et. al. makes the important point that it is 
        impossible to verify a general hypothesis through testing, but it is 
        possible to falsify it: we can't surely conclude that a virus is not 
        deadly, no matter how many people recover from it; however, we can 
        easily conclude it is deadly once a single person dies from it. Good 
        hypotheses are simple, specific, and stated in advance of testing.`,
    },
    5: {
      1: `
        In fact, hypotheses actually come in pairs: usually, a null hypothesis 
        and an alternative hypothesis.`,
      2: `
        The null hypothesis states that there is no association between the 
        predictor variable and the outcome: that is, there is no association 
        between being infected and testing positive.`,
      3: `
        The alternative hypothesis says that there is such an association. Let's 
        look at this through the lens of our example: the alternative hypothesis 
        is that there is an association between being infected and testing 
        positive.`,
      4: `
        We would make a \\(\\textbf{type I error}\\) if we concluded that a 
        certain test did show a relationship between testing positive and being 
        sick, when there was really no relationship. We would make a 
        \\(\\textbf{type II error}\\) if we concluded that there was no 
        relationship, but there really was one. `,
    },
    6: {
      1: `
        While it might seem like these errors would probably never show up when 
        creating a test for a disease, it is important to consider the magnitude 
        of an error, of either type.`,
      2: `
        If we were to make a \\(\\textbf{type I error}\\), we could be allowing 
        a test into the world that is completely ineffective: this could wreak 
        havoc on many peoples lives and cause confusion and panic. If we were to 
        make a \\(\\textbf{type II error}\\), we could be throwing away millions 
        of dollars and thousands of lab hours needed to create the test in the 
        first place.`,
      3: `
        This is why it is so important to be as sure of our decisions as 
        possible: one way to do this is by using a very small 
        \\(\\alpha\\)-value. A standard \\(\\alpha\\) is \\(0.05\\), which means 
        we think that there is only a \\(5\\%\\) chance that we will make a 
        \\(\\textbf{type I error}\\). While we would like this value to be as 
        low as possible, the value of \\(\\alpha\\) depends on a number of 
        factors.`,
      4: `
        The same type of value is set for \\(\\beta\\), which is the likelihood 
        that we think we will make a \\(\\textbf{type II error}\\). `,
    },
    7: {
      1: `
        To end this tutorial, let's make some conclusions about our example from 
        above. We have \\(464\\) total positive tests and \\(736\\) total 
        negative tests: this leads to a mean of \\(0.387\\) with a standard 
        deviation of \\(0.487\\) (assuming a positive test is \\(1\\) and a 
        negative test is \\(0\\)).`,
      2: `
        In actuality, we have \\(400\\) actually healthy people and \\(800\\) 
        actually infected people: this leads to a mean of \\(0.333\\) and a 
        standard deviation of \\(0.472\\).`,
      3: `
        After running a T-Test on the data, we end up with a p-value of 
        \\(0.0065\\). What does this mean? It means that we must reject the null 
        hypothesis that our test and the actual population are statistically 
        insignificantly different: that is, our test isn't quite good enough! 
        There is a statistically significant difference in the number of 
        positive and negative results and the number of actual infected and 
        healthy people.`,
      4: `
        That's ok: COVID-19 PCR tests have \\(\\textbf{Sensitivity}\\) and 
        \\(\\textbf{Specificity}\\)  near \\(1\\), much better than our 
        \\(0.9\\) \\(\\textbf{Sensitivity}\\) and \\(0.96\\) 
        \\(\\textbf{Specificity}\\). `,
    },
  },
  About: {
    About: `Hello! My name is Alex Baroody, and this set of tutorials is my Independent Work Project at Princeton University. I completed this page in the spring of 2022, my junior year. These tutorials are designed to be supplemental to classroom learning, giving a different perspective or easily accessible information for those who are confused. You can find the source code for this project \\(\\href{https://github.com/baroodya/visual-statistics}{\\textcolor{royalblue}{\\text{here.}}}\\) You can keep up to date with me and my projects on \\(\\href{https://github.com/baroodya}{\\textcolor{royalblue}{\\text{github}}}\\) and \\(\\href{https://www.linkedin.com/in/alex-baroody/}{\\textcolor{royalblue}{\\text{linkedin.}}}\\) Thanks for reading this far, I hope you enjoyed!`,
    Ack: `The sources and related work I used to complete this project can be found \\(\\href{https://github.com/baroodya/visual-statistics/tree/about-section-v2#sources-and-related-work}{\\textcolor{royalblue}{\\text{in the github ReadMe.}}}\\) More Coming Soon...`,
  },
  Explanation: `Welcome! To navigate this page, use the up and down arrows on screen
  or on your keyboard. You can also use the menu in the top left to
  skip to the beginning of the tutorials. If you want to learn more about this project
  and its author, complete all three tutorials or click 'About this
  Project' at the bottom of the menu. To start with the basic
  tutorial, click the down arrow below: have fun!`,
};
