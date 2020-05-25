import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PageContent from 'Components/Page/PageContent';
import PageContentBody from 'Components/Page/PageContentBody';
import CustomFormatsConnector from './CustomFormats/CustomFormatsConnector';
import SettingsToolbarConnector from 'Settings/SettingsToolbarConnector';

class CustomFormatSettingsConnector extends Component {

  //
  // Render

  render() {
    return (
      <PageContent title="Custom Formats Settings">
        <SettingsToolbarConnector
          showSave={false}
        />

        <PageContentBody>
          <DndProvider backend={HTML5Backend}>
            <CustomFormatsConnector />
          </DndProvider>
        </PageContentBody>
      </PageContent>
    );
  }
}

export default CustomFormatSettingsConnector;

