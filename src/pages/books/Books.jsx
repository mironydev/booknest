import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListCard from "../../components/ui/ReadListCard";
import WishListCard from "../../components/ui/WishListCard";

const Books = () => {
  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto">
      <div className="text-right -mb-7">
        <select
          value={sortingType}
          onChange={(e) => setSortingType(e.target.value)}
          className="select w-fit pr-8 outline-0"
        >
          <option value="" disabled={true}>
            Sort By
          </option>
          <option value="rating">Rating</option>
          <option value="pages">Total Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>
      <Tabs className="mt-5">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel className="space-y-5 pt-5">
          <ReadListCard sortingType={sortingType}></ReadListCard>
        </TabPanel>
        <TabPanel className="space-y-5">
          <WishListCard sortingType={sortingType}></WishListCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
