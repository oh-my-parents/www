import useQueryParams from '@/hooks/useQueryParams';
import authService from '@/service/auth.service';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Callback = (props: Props) => {
  const code = useQueryParams('code');
  const navigate = useNavigate();

  useEffect(() => {
    authService.login(code!);
    navigate('/root');
    return () => {
    }
  }, [code]);

  return (
    <div>Redirect Page</div>
  );



}

export default Callback