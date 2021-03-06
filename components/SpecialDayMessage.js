import { Text } from "@chakra-ui/react";

export default function SpecialDayMessages({ day }) {
  const dayInt = parseInt(day);

  const dayMessage = (day) => {
    switch (day) {
      case 1:
        return "A journey of a thousand miles begins with a step. ππ₯";
      case 14:
        return "Youβre 2 weeks in. Great work! π₯³π";
      case 30:
        return "First month done. You are awesome! πͺπ";
      case 50:
        return "You are halfway there. You didnβt come this far only to come this far. Keep going! πͺπ₯";
      case 66:
        return "You have yourself a new habit, statistically speaking. Time to celebrate! ππ";
      case 90:
        return "Nearly 3 full months of consistent, hard work. You should be proud of your effort!ππ";
      case 99:
        return "Tomorrow is the day. Enjoy the feeling of accomplishment when checking off that last day. Look back at where you started. ππ";
      case 100:
        return "You made it! Be proud of yourself π€©π";
      default:
        return undefined; // To make dayMessage return false when there is no message
    }
  };

  return (
    <Text
      textAlign="center"
      fontSize="xl"
      fontWeight="thin"
      m={dayMessage(dayInt) ? 2 : 0} // Add margin if there is a given day
    >
      {dayMessage(dayInt)}
    </Text>
  );
}
