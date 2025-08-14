import React from "react";

function CommitmentCard({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-28 lg:w-32 aspect-square p-2 bg-white rounded-lg shadow-md">
      <Icon className="text-2xl text-secondary-color" />
      <h3 className="text-sm font-semibold text-center font-playfairDisplay mt-5">
        {title}
      </h3>
    </div>
  );
}

export default CommitmentCard;
