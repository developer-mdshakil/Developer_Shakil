import React from 'react';
import EducationlQulity from './EducationlQulity';
import JobSkillQuality from './JobSkillQuality';

const AboutEducationQuality = () => {
    return (
        <>
            <div className='flex justify-between  p-6'>
                {/* Educational Quality component here  */}
                <EducationlQulity></EducationlQulity>
                {/* job skill quality component here  */}
                <JobSkillQuality></JobSkillQuality>
            </div>
        </>
    );
};

export default AboutEducationQuality;