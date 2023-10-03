import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  //this is for get data 
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', {id: params.id}],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  //this is for update data 
  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;//this from mutate({id:..., event:...})

      //this is cancel refetch for useQuery
      await queryClient.cancelQueries({ queryKey: ['events', {id: params.id}] });

      //this is for rollback data when fail
      const previousEvent = queryClient.getQueryData(['events', {id: params.id}]);

      //this is optimistic update
      queryClient.setQueryData(['events', {id: params.id}], newEvent);

      return { previousEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', {id: params.id}], context.previousEvent);//context.previousEvent from onMutate
    },
    onSettled: () => {// Always refetch after error or success
      queryClient.invalidateQueries(['events', {id: params.id}]);
    }
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            'Failed to load event. Please check your inputs and try again later.'
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}