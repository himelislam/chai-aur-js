{/* <script> */} // CMS
   // Define the content map
const contentMap = {
    '0': '-',
    '1': {
        '1': 'ADHD',
        '2': 'Autism',
        '3': 'Aspergers Syndrome',
        '4': 'OCD',
        '5': "Tourette's Syndrome",
        '6': 'Stimming',
        '7': 'Dyslexia',
        '8': 'Depression or Anxiety',
        '9': 'Ticks',
        '10': 'Epilepsy',
        '11': 'Eczema',
        '12': 'Other',
        '13': 'Your child finds school work challenging',
        '14': 'Your child struggles with pencil grip and or handwriting',
        '15': 'Your child struggles with reading, writing or maths',
        '16': 'Your child struggles to digest or process information',
        '17': 'Your child struggles to concentrate or focus on tasks',
        '18': 'Your child is uncoordinated or they struggle with stability or balance',
        '19': 'Your child struggles with physical tasks such as running, throwing, catching, kicking or swimming',
        '20': 'Your child has a slumped or poor posture',
        '21': 'Your child is clumsy, and they bump into things or fall over a lot',
        '22': 'Your child is prone to spilling drinks',
        '23': 'Your child wears glasses or has eye sight problems',
        '24': 'Your child has food sensitivity or digestive issues',
        '25': 'Your child has self-awareness issues',
        '26': 'Your child struggles to show awareness or empathy for others',
        '27': 'Your child struggles to understand non-verbal cues or body language',
        '28': 'Your child fidgets a lot or get hyperactive',
        '29': "Your child has many tantrums or gets very angry if things don't go their way",
        '30': 'Your child craves routine and repetition',
        '31': 'Your child struggles to make friends',
        '32': 'Your child only has one important friend and struggles to play in groups or with other children',
        '33': 'Your child behaves at school but disobedient at home',
        '34': 'Your child suffers with anxiety',
        '35': 'Your child suffers with stress or depression',
        '36': 'Your child finds it hard to regulate their emotions',
        '37': 'Your child hates going to school',
        '38': 'Your child has low confidence or low self-esteem',
        '39': 'Your child is afraid to sleep by themselves or is afraid to be alone in different areas of your home',
        '40': 'Your child is afraid of dogs or insects',
        '41': 'Your child is clingy and struggles to leave your side when in social situations such as parties'
    },
    '2': {
        '1': 'ADHD',
        '2': 'Autism',
        '3': 'Aspergers Syndrome',
        '4': 'OCD',
        '5': "Tourette's Syndrome",
        '6': 'Stimming',
        '7': 'Dyslexia',
        '8': 'Depression or Anxiety',
        '9': 'Ticks',
        '10': 'Epilepsy',
        '11': 'Eczema',
        '12': 'Other',
        '13': 'Your child finds school work challenging',
        '14': 'Your child struggles with pencil grip and or handwriting',
        '15': 'Your child struggles with reading, writing or maths',
        '16': 'Your child struggles to digest or process information',
        '17': 'Your child struggles to concentrate or focus on tasks',
        '18': 'Your child is uncoordinated or they struggle with stability or balance',
        '19': 'Your child struggles with physical tasks such as running, throwing, catching, kicking or swimming',
        '20': 'Your child has a slumped or poor posture',
        '21': 'Your child is clumsy, and they bump into things or fall over a lot',
        '22': 'Your child is prone to spilling drinks',
        '23': 'Your child wears glasses or has eye sight problems',
        '24': 'Your child has food sensitivity or digestive issues',
        '25': 'Your child has self-awareness issues',
        '26': 'Your child struggles to show awareness or empathy for others',
        '27': 'Your child struggles to understand non-verbal cues or body language',
        '28': 'Your child fidgets a lot or get hyperactive',
        '29': "Your child has many tantrums or gets very angry if things don't go their way",
        '30': 'Your child craves routine and repetition',
        '31': 'Your child struggles to make friends',
        '32': 'Your child only has one important friend and struggles to play in groups or with other children',
        '33': 'Your child behaves at school but disobedient at home',
        '34': 'Your child suffers with anxiety',
        '35': 'Your child suffers with stress or depression',
        '36': 'Your child finds it hard to regulate their emotions',
        '37': 'Your child hates going to school',
        '38': 'Your child has low confidence or low self-esteem',
        '39': 'Your child is afraid to sleep by themselves or is afraid to be alone in different areas of your home',
        '40': 'Your child is afraid of dogs or insects',
        '41': 'Your child is clingy and struggles to leave your side when in social situations such as parties'
    }
};

// Get the sequence from the URL parameter 'res'
const urlParams = new URLSearchParams(window.location.search);
const sequence = urlParams.get('res');

sequenceLength = 0;

if (sequence !== null) {
    console.log(sequence);
    sequenceLength = sequence.length;
    console.log(sequenceLength);
}

// Check if the sequence is provided
if (sequenceLength == 41) {
    // Split the sequence into individual characters
    const characters = sequence.split('');

    // Filter out the dashes
    const numbers = characters.filter(char => char !== '-');

    // Create result arrays to store the values
    const result1 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result2 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result3 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result4 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result5 = {
        '0': [],
        '1': [],
        '2': []
    };

    // Iterate over each number in the sequence
    numbers.forEach((num, index) => {
        // Get the corresponding value from the content map
        const value = contentMap[num][index + 1];

        // Add the value to the appropriate result array
        if (index < 12) {
            result1[num].push(value);
        } else if (index >= 12 && index < 17) {
            result2[num].push(value);
        } else if (index >= 17 && index < 24) {
            result3[num].push(value);
        } else if (index >= 24 && index < 33) {
            result4[num].push(value);
        } else {
            result5[num].push(value);
        }
    });

    const resultSeverityCopy = document.querySelector('.dorik-text.dorik-text-u2fmqzxy');
    const resultMaturityCopy = document.querySelector('.dorik-text.dorik-text-xzlx8jh0');

	resultSeverityCopy.innerHTML = `
    ${(result1['1'].length == 0) && (result2['1'].length == 0) && (result3['1'].length == 0) && (result4['1'].length == 0)  && (result5['1'].length == 0) ? `
    <p>You have answered No, to all of the questions.</p>` : '<p>Based on your answers to the assessment (summarised below), you have identified that your child struggles with the following areas: '}
    ${result1['1'].length > 0 ? `<strong>Behavioural</strong>${result2['1'].length > 0 || result3['1'].length > 0 || result4['1'].length > 0 || result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result2['1'].length > 0 ? `<strong>Academic</strong>${result3['1'].length > 0 || result4['1'].length > 0 || result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result3['1'].length > 0 ? `<strong>Coordination</strong>${result4['1'].length > 0 || result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result4['1'].length > 0 ? `<strong>Social</strong>${result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result5['1'].length > 0 ? `<strong>Emotional</strong>.` : ''}
    ${(result1['1'].length == 0) && (result2['1'].length == 0) && (result3['1'].length == 0) && (result4['1'].length == 0)  && (result5['1'].length == 0) ? `` : ''}`
	
	if((result1['1'].length == 0) && (result2['1'].length == 0) && (result3['1'].length == 0) && (result4['1'].length == 0)  && (result5['1'].length == 0)){
		const resultContainerHR = document.querySelector('.dorik-container-fkm6c99b');
		const resultContainerDontWorry = document.querySelector('.dorik-container-wrnyjwq5');
		resultContainerHR.innerHTML = ``;
		resultContainerDontWorry.innerHTML = ``;
	}

    resultStrength = 0;
    resultsScore1 = result1['1'].length;
    resultsScore2 = result2['1'].length;
    resultsScore3 = result3['1'].length;
    resultsScore4 = result4['1'].length;
    resultsScore5 = result5['1'].length;

    if (resultsScore1 > 0 && resultsScore2 > 0 && resultsScore3 > 0 && resultsScore4 > 0 && resultsScore5 > 0) {
        resultStrength = 12;
    } else {
        resultStrength = resultsScore1 + resultsScore2 + resultsScore3 + resultsScore4 + resultsScore5;
    }

    // (0-5) subtle signs
    // (6-11) signs 
    // (12+ or 1 in each section) strong signs 
    if (resultStrength > 0 && resultStrength < 6) {
        resultMaturityCopy.innerHTML = "<p>Your child is <strong>showing subtle signs of brain immaturity</strong> and it is almost certain they have Primitive Reflexes still active.</p>";
    } else if (resultStrength > 5 && resultStrength < 12) {
        resultMaturityCopy.innerHTML = "<p>Your child is <strong>showing signs of brain immaturity</strong> and it is almost certain they have Primitive Reflexes still active.</p>";
    } else if (resultStrength > 11) {
        resultMaturityCopy.innerHTML = "<p>Your child is <strong>showing strong signs of brain immaturity</strong> and it is almost certain they have Primitive Reflexes still active.</p>";
    } else if (resultStrength == 0) {
        resultMaturityCopy.innerHTML = "<p>We could not see any signs of immaturity but you may still want to seek further support if you have concerns.</p>";
    } else {
        resultMaturityCopy.innerHTML = "<p>It looks like there was an error processing your results.</p>";
    }

    // Display the results in separate unordered lists
    const resultContainerOne = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-yz02foz4 .content');
    const resultContainerTwo = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-ejpun0do .content');
    const resultContainerThree = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-ip96ww2n .content');
    const resultContainerFour = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-7s78ynui .content');
    const resultContainerFive = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-je04wcxr .content');


    


    resultContainerOne.innerHTML = `
	  <h3 class="tab_hdr">Behavioural</h3>
	  ${result1['1'].length == 0 ? `
		<p>You informed us your child hasn't been assessed or diagnosed with any specific behavioural conditions</p>
		<ul>${result1['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result1['1'].length > 0 ? `
		<p>You selected the following condition(s) that your child has been assessed for or diagnosed with:</p>
		<ul>${result1['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerTwo.innerHTML = `
	  <h3 class="tab_hdr">Academic</h3>
	  ${(result2['1'].length == 0) && (result2['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result2['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result2['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result2['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result2['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerThree.innerHTML = `
	  <h3 class="tab_hdr">Coordination</h3>
	  ${(result3['1'].length == 0) && (result3['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result3['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result3['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result3['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result3['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerFour.innerHTML = `
	  <h3 class="tab_hdr">Social</h3>
	  ${(result4['1'].length == 0) && (result4['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result4['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result4['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result4['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result4['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerFive.innerHTML = `
	  <h3 class="tab_hdr">Emotional</h3>
	  ${(result5['1'].length == 0) && (result5['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result5['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result5['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result5['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result5['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;
} else {
    console.log('nothing');
    const resultContainer = document.querySelector('.dorik-container-v1xs6o41');
    const resultContainerTabsTitle = document.querySelector('.dorik-container-fkm6c99b');
    const resultContainerTabs = document.querySelector('.dorik-container-llq9z5e9');
    const resultContainerDontWorry = document.querySelector('.dorik-container-wrnyjwq5');
    resultContainer.innerHTML = `<h4>Sorry we're unable to display your results</h4>`;
    resultContainerTabsTitle.innerHTML = ``;
    resultContainerTabs.innerHTML = ``;
    resultContainerTabs.style.display = "none";
    resultContainerDontWorry.innerHTML = ``;
}

// </script>

// Static

{/* <script> */}
   // Define the content map
const contentMap = {
    '0': '-',
    '1': {
        '1': 'ADHD',
        '2': 'Autism',
        '3': 'Aspergers Syndrome',
        '4': 'OCD',
        '5': "Tourette's Syndrome",
        '6': 'Stimming',
        '7': 'Dyslexia',
        '8': 'Depression or Anxiety',
        '9': 'Ticks',
        '10': 'Epilepsy',
        '11': 'Eczema',
        '12': 'Other',
        '13': 'Your child finds school work challenging',
        '14': 'Your child struggles with pencil grip and or handwriting',
        '15': 'Your child struggles with reading, writing or maths',
        '16': 'Your child struggles to digest or process information',
        '17': 'Your child struggles to concentrate or focus on tasks',
        '18': 'Your child is uncoordinated or they struggle with stability or balance',
        '19': 'Your child struggles with physical tasks such as running, throwing, catching, kicking or swimming',
        '20': 'Your child has a slumped or poor posture',
        '21': 'Your child is clumsy, and they bump into things or fall over a lot',
        '22': 'Your child is prone to spilling drinks',
        '23': 'Your child wears glasses or has eye sight problems',
        '24': 'Your child has food sensitivity or digestive issues',
        '25': 'Your child has self-awareness issues',
        '26': 'Your child struggles to show awareness or empathy for others',
        '27': 'Your child struggles to understand non-verbal cues or body language',
        '28': 'Your child fidgets a lot or get hyperactive',
        '29': "Your child has many tantrums or gets very angry if things don't go their way",
        '30': 'Your child craves routine and repetition',
        '31': 'Your child struggles to make friends',
        '32': 'Your child only has one important friend and struggles to play in groups or with other children',
        '33': 'Your child behaves at school but disobedient at home',
        '34': 'Your child suffers with anxiety',
        '35': 'Your child suffers with stress or depression',
        '36': 'Your child finds it hard to regulate their emotions',
        '37': 'Your child hates going to school',
        '38': 'Your child has low confidence or low self-esteem',
        '39': 'Your child is afraid to sleep by themselves or is afraid to be alone in different areas of your home',
        '40': 'Your child is afraid of dogs or insects',
        '41': 'Your child is clingy and struggles to leave your side when in social situations such as parties'
    },
    '2': {
        '1': 'ADHD',
        '2': 'Autism',
        '3': 'Aspergers Syndrome',
        '4': 'OCD',
        '5': "Tourette's Syndrome",
        '6': 'Stimming',
        '7': 'Dyslexia',
        '8': 'Depression or Anxiety',
        '9': 'Ticks',
        '10': 'Epilepsy',
        '11': 'Eczema',
        '12': 'Other',
        '13': 'Your child finds school work challenging',
        '14': 'Your child struggles with pencil grip and or handwriting',
        '15': 'Your child struggles with reading, writing or maths',
        '16': 'Your child struggles to digest or process information',
        '17': 'Your child struggles to concentrate or focus on tasks',
        '18': 'Your child is uncoordinated or they struggle with stability or balance',
        '19': 'Your child struggles with physical tasks such as running, throwing, catching, kicking or swimming',
        '20': 'Your child has a slumped or poor posture',
        '21': 'Your child is clumsy, and they bump into things or fall over a lot',
        '22': 'Your child is prone to spilling drinks',
        '23': 'Your child wears glasses or has eye sight problems',
        '24': 'Your child has food sensitivity or digestive issues',
        '25': 'Your child has self-awareness issues',
        '26': 'Your child struggles to show awareness or empathy for others',
        '27': 'Your child struggles to understand non-verbal cues or body language',
        '28': 'Your child fidgets a lot or get hyperactive',
        '29': "Your child has many tantrums or gets very angry if things don't go their way",
        '30': 'Your child craves routine and repetition',
        '31': 'Your child struggles to make friends',
        '32': 'Your child only has one important friend and struggles to play in groups or with other children',
        '33': 'Your child behaves at school but disobedient at home',
        '34': 'Your child suffers with anxiety',
        '35': 'Your child suffers with stress or depression',
        '36': 'Your child finds it hard to regulate their emotions',
        '37': 'Your child hates going to school',
        '38': 'Your child has low confidence or low self-esteem',
        '39': 'Your child is afraid to sleep by themselves or is afraid to be alone in different areas of your home',
        '40': 'Your child is afraid of dogs or insects',
        '41': 'Your child is clingy and struggles to leave your side when in social situations such as parties'
    }
};

// Get the sequence from the URL parameter 'res'
const urlParams = new URLSearchParams(window.location.search);
const sequence = urlParams.get('res');

sequenceLength = 0;

if (sequence !== null) {
    console.log(sequence);
    sequenceLength = sequence.length;
    console.log(sequenceLength);
}

// Check if the sequence is provided
if (sequenceLength == 41) {
    // Split the sequence into individual characters
    const characters = sequence.split('');

    // Filter out the dashes
    const numbers = characters.filter(char => char !== '-');

    // Create result arrays to store the values
    const result1 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result2 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result3 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result4 = {
        '0': [],
        '1': [],
        '2': []
    };
    const result5 = {
        '0': [],
        '1': [],
        '2': []
    };

    // Iterate over each number in the sequence
    numbers.forEach((num, index) => {
        // Get the corresponding value from the content map
        const value = contentMap[num][index + 1];

        // Add the value to the appropriate result array
        if (index < 12) {
            result1[num].push(value);
        } else if (index >= 12 && index < 17) {
            result2[num].push(value);
        } else if (index >= 17 && index < 24) {
            result3[num].push(value);
        } else if (index >= 24 && index < 33) {
            result4[num].push(value);
        } else {
            result5[num].push(value);
        }
    });

    const resultSeverityCopy = document.querySelector('.dorik-text.dorik-text-u2fmqzxy');
    const resultMaturityCopy = document.querySelector('.dorik-text.dorik-text-xzlx8jh0');

	resultSeverityCopy.innerHTML = `
    ${(result1['1'].length == 0) && (result2['1'].length == 0) && (result3['1'].length == 0) && (result4['1'].length == 0)  && (result5['1'].length == 0) ? `
    <p>You have answered No, to all of the questions.</p>` : '<p>Based on your answers to the assessment (summarised below), you have identified that your child struggles with the following areas: '}
    ${result1['1'].length > 0 ? `<strong>Behavioural</strong>${result2['1'].length > 0 || result3['1'].length > 0 || result4['1'].length > 0 || result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result2['1'].length > 0 ? `<strong>Academic</strong>${result3['1'].length > 0 || result4['1'].length > 0 || result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result3['1'].length > 0 ? `<strong>Coordination</strong>${result4['1'].length > 0 || result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result4['1'].length > 0 ? `<strong>Social</strong>${result5['1'].length > 0 ? ',' : '.'} ` : ''}
    ${result5['1'].length > 0 ? `<strong>Emotional</strong>.` : ''}
    ${(result1['1'].length == 0) && (result2['1'].length == 0) && (result3['1'].length == 0) && (result4['1'].length == 0)  && (result5['1'].length == 0) ? `` : ''}`
	
	if((result1['1'].length == 0) && (result2['1'].length == 0) && (result3['1'].length == 0) && (result4['1'].length == 0)  && (result5['1'].length == 0)){
		const resultContainerHR = document.querySelector('.dorik-container-fkm6c99b');
		const resultContainerDontWorry = document.querySelector('.dorik-container-wrnyjwq5');
		resultContainerHR.innerHTML = ``;
		resultContainerDontWorry.innerHTML = ``;
	}

    resultStrength = 0;
    resultsScore1 = result1['1'].length;
    resultsScore2 = result2['1'].length;
    resultsScore3 = result3['1'].length;
    resultsScore4 = result4['1'].length;
    resultsScore5 = result5['1'].length;

    if (resultsScore1 > 0 && resultsScore2 > 0 && resultsScore3 > 0 && resultsScore4 > 0 && resultsScore5 > 0) {
        resultStrength = 12;
    } else {
        resultStrength = resultsScore1 + resultsScore2 + resultsScore3 + resultsScore4 + resultsScore5;
    }

    // (0-5) subtle signs
    // (6-11) signs 
    // (12+ or 1 in each section) strong signs 
    if (resultStrength > 0 && resultStrength < 6) {
        resultMaturityCopy.innerHTML = "<p>Your child is <strong>showing subtle signs of brain immaturity</strong> and it is almost certain they have Primitive Reflexes still active.</p>";
    } else if (resultStrength > 5 && resultStrength < 12) {
        resultMaturityCopy.innerHTML = "<p>Your child is <strong>showing signs of brain immaturity</strong> and it is almost certain they have Primitive Reflexes still active.</p>";
    } else if (resultStrength > 11) {
        resultMaturityCopy.innerHTML = "<p>Your child is <strong>showing strong signs of brain immaturity</strong> and it is almost certain they have Primitive Reflexes still active.</p>";
    } else if (resultStrength == 0) {
        resultMaturityCopy.innerHTML = "<p>We could not see any signs of immaturity but you may still want to seek further support if you have concerns.</p>";
    } else {
        resultMaturityCopy.innerHTML = "<p>It looks like there was an error processing your results.</p>";
    }

    // Display the results in separate unordered lists
    const resultContainerOne = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-yz02foz4 .content');
    const resultContainerTwo = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-ejpun0do .content');
    const resultContainerThree = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-ip96ww2n .content');
    const resultContainerFour = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-7s78ynui .content');
    const resultContainerFive = document.querySelector('.dorik-tabs-2ogh2ewr .accordion-tabs .tabs-panel.panel-je04wcxr .content');


    resultContainerOne.innerHTML = `
	  <h3 class="tab_hdr">Behavioural</h3>
	  ${result1['1'].length == 0 ? `
		<p>You informed us your child hasn't been assessed or diagnosed with any specific behavioural conditions</p>
		<ul>${result1['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result1['1'].length > 0 ? `
		<p>You selected the following condition(s) that your child has been assessed for or diagnosed with:</p>
		<ul>${result1['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerTwo.innerHTML = `
	  <h3 class="tab_hdr">Academic</h3>
	  ${(result2['1'].length == 0) && (result2['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result2['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result2['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result2['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result2['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerThree.innerHTML = `
	  <h3 class="tab_hdr">Coordination</h3>
	  ${(result3['1'].length == 0) && (result3['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result3['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result3['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result3['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result3['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerFour.innerHTML = `
	  <h3 class="tab_hdr">Social</h3>
	  ${(result4['1'].length == 0) && (result4['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result4['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result4['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result4['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result4['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;

    resultContainerFive.innerHTML = `
	  <h3 class="tab_hdr">Emotional</h3>
	  ${(result5['1'].length == 0) && (result5['2'].length == 0) ?`
		<p>You ansered No to all these questions</p> 
	  ` : ''}
	  ${result5['1'].length > 0 ? `
		<p>You answered Yes to the following questions:</p>
		<ul>${result5['1'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	  ${result5['2'].length > 0 ? `
		<p>You answered Sometimes to the following questions:</p>
		<ul>${result5['2'].map(value => value !== undefined ? `<li>${value}</li>` : '').join('')}</ul>
	  ` : ''}
	`;
} else {
    console.log('nothing');
    const resultContainer = document.querySelector('.dorik-container-v1xs6o41');
    const resultContainerTabsTitle = document.querySelector('.dorik-container-fkm6c99b');
    const resultContainerTabs = document.querySelector('.dorik-container-llq9z5e9');
    const resultContainerDontWorry = document.querySelector('.dorik-container-wrnyjwq5');
    resultContainer.innerHTML = `<h4>Sorry we're unable to display your results</h4>`;
    resultContainerTabsTitle.innerHTML = ``;
    resultContainerTabs.innerHTML = ``;
    resultContainerTabs.style.display = "none";
    resultContainerDontWorry.innerHTML = ``;
}

// </script>