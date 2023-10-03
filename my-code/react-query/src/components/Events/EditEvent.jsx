import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();

  //this is for get data
  const { data, isError, error } = useQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000,//refetching in 10 seconds
  });

  //this is for update data
  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event; //this from mutate({id:..., event:...})

  //     //this is cancel refetch for useQuery
  //     await queryClient.cancelQueries({
  //       queryKey: ["events", { id: params.id }],
  //     });

  //     //this is for rollback data when fail
  //     const previousEvent = queryClient.getQueryData([
  //       "events",
  //       { id: params.id },
  //     ]);

  //     //this is optimistic update
  //     queryClient.setQueryData(["events", { id: params.id }], newEvent);

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(
  //       ["events", { id: params.id }],
  //       context.previousEvent
  //     ); //context.previousEvent from onMutate
  //   },
  //   onSettled: () => {
  //     // Always refetch after error or success
  //     queryClient.invalidateQueries(["events", { id: params.id }]);
  //   },
  // });

  function handleSubmit(formData) {
    // mutate({ id: params.id, event: formData });
    submit(formData, { method: "PUT" });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
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
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

//this will load first before component render
export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);

  //you can use await if this return Promise
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]); //for refetch when changed

  return redirect("../");
}
