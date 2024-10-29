import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPageTitle, toggleRTL } from '../../../../store/themeConfigSlice';
import { IRootState } from '../../../../Redux/store';
import FormClaim from '../../workspace/Feedbacks/Claims/FormClaim';

const ContactUs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formParams, setFormParams] = useState({
    id: '',
    title: '',
    tag: '',
    description: '',
  });

  useEffect(() => {
    dispatch(setPageTitle('Contact Us'));
  }, [dispatch]);

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const setLocale = (flag: string) => {
    setFlag(flag);
    if (flag.toLowerCase() === 'ae') {
      dispatch(toggleRTL('rtl'));
    } else {
      dispatch(toggleRTL('ltr'));
    }
  };
  const [flag, setFlag] = useState(themeConfig.locale);

  const handleClaimClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/Claims');
  };

  const handlePassClaimClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsFormOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormParams((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSave = () => {
    console.log('Form data saved:', formParams);
    setIsFormOpen(false);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="content">
      <div style={{ height: '65vh', width: '97vw', overflow: 'hidden', margin: '0', padding: '0' }}>
        <img 
          className="w-full h-full object-cover rounded-lg cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
      </div>
      <div className="panel text-center mt-10">
        <h3 className="mb-6 text-4xl md:text-5xl font-bold text-red-700">
          Contact Us
        </h3>
        <div className="mt-4">
          <h3 className="mb-6 text-base font-bold md:text-xl">
            The quickest way to get in touch with us is by using the contact information below.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-bold">Courses</h2>
            <hr className="border-t-2 border-black my-2" />
            <p>Email : <a href="mailto:TriTraining@gmail.com" className="text-blue-600">TriTraining@gmail.com</a></p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Learners</h2>
            <hr className="border-t-2 border-black my-2" />
            <p>Visit our <a href="#" className="text-blue-600">Help Center</a></p>
            <p><a href="#" className="text-blue-600">Teaching Center</a></p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Claims</h2>
            <hr className="border-t-2 border-black my-2" />
            <p>Claim: <a href="#" className="text-blue-600" onClick={handlePassClaimClick}>Pass your claim here</a></p>
            <p><a href="#" className="text-blue-600" onClick={handleClaimClick}>My claims</a></p>
          </div>
        </div>
      </div>
      <FormClaim 
        open={isFormOpen} 
        onClose={handleFormClose} 
        onSave={handleFormSave} 
        params={formParams} 
        changeValue={handleFormChange} 
      />
    </div>
  );
};

export default ContactUs;
